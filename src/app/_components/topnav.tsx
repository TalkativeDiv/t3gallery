import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { UploadButton } from "./upload-button";
import { UserButton } from "./user-button";
import { currentUser } from "@clerk/nextjs/server";
import { ModeToggle } from "./mode-toggle";
export async function Navbar() {
  // const router = useRouter()
  const user = await currentUser();
  return (
    <nav className="container flex min-w-full items-center justify-between border-b border-border bg-background/95 px-12 py-3 text-xl font-semibold backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="flex items-center justify-center gap-1">
        <ImageIcon />
        Gallery
      </Link>

      <div className="flex flex-row">
        <SignedIn>
          <div className="flex items-center justify-between gap-2">
            <UploadButton />
            <UserButton userImageUrl={user?.imageUrl || null} />
          </div>
        </SignedIn>
        <SignedOut>
          <ModeToggle />
        </SignedOut>
      </div>
    </nav>
  );
}
