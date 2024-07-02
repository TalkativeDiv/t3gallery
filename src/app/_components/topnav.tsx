"use client"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { UploadButton } from "~/utils/uploadthing";

export function Navbar() {
    const router = useRouter()
    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div>Gallery</div>

            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <div className="flex justify-between items-center gap-2">
                        <UploadButton endpoint="imageUploader"
                            appearance={{ button: cn(buttonVariants({ size: "sm" }), "bg-primary"), allowedContent: "hidden" }}
                            onClientUploadComplete={() => { router.refresh() }}
                        />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}