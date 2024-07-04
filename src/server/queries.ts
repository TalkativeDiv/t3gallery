import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "server-only";
import { db } from "./db";
import { images } from "./db/schema";

export async function getImages() {

    const user = auth()

    if (!user.userId) throw new Error("Unauthorized")

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
    });
    return images
}

export async function getSpecificImage(id: number) {
    const user = auth();
    if (!user.userId) throw new Error("Unauthorized");

    const image = await db.query.images.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });
    if (!image) redirect('/')

    if (image.userId !== user.userId) throw new Error("Unauthorized");

    return image;
}

export async function deleteImage(id: number) {
    const user = auth()

    if (!user.userId) throw new Error("Unauthorized")

    await db.delete(images).where(and(eq(images.id, id), eq(images.userId, user.userId)));
    revalidatePath("/")
    redirect("/")
}
