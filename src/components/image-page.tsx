import { clerkClient } from "@clerk/nextjs/server";
import { X } from "lucide-react";
import React from "react";
import { deleteImage, getSpecificImage } from "~/server/queries";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// import Image from "next/image";
export default async function ImagePage(props: { imgId: number }) {
  const image = await getSpecificImage(props.imgId);
  function getImageEndings(text: string) {
    // Regular expression to match file extensions after the last period
    const extensionRegex = /\.[^.]+$/g;

    // Array to store matched extensions
    const extensions = [];

    // Use a loop to find all matches in the text
    let match;
    while ((match = extensionRegex.exec(text)) !== null) {
      extensions.push(match[0].substring(1)); // Push the matched extension without the period
    }

    return extensions;
  }
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  async function handleDelete() {
    "use server";

    await deleteImage(image.id);
  }
  return (
    <div className="flex h-full w-full min-w-0 justify-between">
      <Button variant="ghost" size="sm" className="m-2" asChild>
        <a href="/">
          <X />
        </a>
      </Button>
      <div className="flex flex-shrink flex-col items-center justify-center p-8">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="m-4 flex w-64 flex-shrink-0 flex-col border-l-2 p-2">
        <div className="flex items-center justify-between border-b-2 p-2 text-xl font-bold">
          {image.name.replace(/\.(png|jpg|jpeg|gif|bmp|svg)\b/gi, "")}
          <Badge>{getImageEndings(image.name)}</Badge>
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <form action={handleDelete}>
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
