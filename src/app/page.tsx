import { SignedIn, SignedOut } from "@clerk/nextjs";
import { buttonVariants } from "~/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { getImages } from "~/server/queries";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";
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
        <ContextMenu key={image.id}>
          <ContextMenuTrigger>
            {" "}
            <Card className="flex flex-col justify-center p-4">
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
                  <Badge variant="secondary">
                    {getImageEndings(image.name)}
                  </Badge>
                </div>
              </Link>
            </Card>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Link href={`/img/${image.id}`}>View</Link>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        {" "}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Easily store high quality images
              <br className="hidden sm:inline" />
              <span className="inline-block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                without the tears
              </span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              T3Gallery is an free and open source image hosting platform that{" "}
              <span className="font-bold">you can host yourself</span>, no
              strings attached.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/sign-in" rel="noreferrer" className={buttonVariants()}>
              Sign in
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TalkativeDiv/t3gallery"
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
        </section>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
