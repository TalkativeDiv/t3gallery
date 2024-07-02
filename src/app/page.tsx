import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";
export const dynamic = "force-dynamic"


async function Images() {
  const images = await getImages()
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={index} className="w-48 flex flex-col">
          <img src={image.url} />
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
