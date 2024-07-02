import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getImages } from "~/server/queries";
export const dynamic = "force-dynamic"


async function Images() {
  const images = await getImages()
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image, index) => (
        <div key={index} className="w-48 flex flex-col">
          <Image src={image.url} alt={image.name} style={{ objectFit: "contain" }} width={192} height={192} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}


export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign In above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
