import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "~/components/ui/card";
import { getImages } from "~/server/queries";
export const dynamic = "force-dynamic"


async function Images() {
  const images = await getImages()
  function getImageEndings(text: string) {
    // Regular expression to match file extensions after the last period
    const extensionRegex = /\.[^.]+$/g;

    // Array to store matched extensions
    let extensions = [];

    // Use a loop to find all matches in the text
    let match;
    while ((match = extensionRegex.exec(text)) !== null) {
      extensions.push(match[0].substring(1)); // Push the matched extension without the period
    }

    return extensions;
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images,...images,...images,...images,...images,...images,].map((image) => (
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
            <div className="flex justify-between items-center">
              <div>
                {image.name.replace(/\.(png|jpg|jpeg|gif|bmp|svg)\b/gi, "")}
              </div>
              <Badge variant="secondary">
                {getImageEndings(image.name)}
              </Badge>
            </div>
          </Link>

        </Card>
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
