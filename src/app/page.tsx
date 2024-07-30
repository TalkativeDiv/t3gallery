import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { getImages } from "~/server/queries";
import { Button } from "~/components/ui/button";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();
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
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <Card key={image.id} className="flex flex-col justify-center p-4">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              height={192}
              width={192}
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt={image.name}
            />
            <br />
            <div className="flex items-center justify-between">
              <div>
                {image.name.replace(/\.(png|jpg|jpeg|gif|bmp|svg)\b/gi, "")}
              </div>
              <Badge variant="secondary">{getImageEndings(image.name)}</Badge>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className=" h-screen w-full text-center">
          To use this app, please{" "}
          <Button asChild variant="ghost">
            <SignInButton />
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
