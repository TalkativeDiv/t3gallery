"use client"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Image } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UploadButton } from "./upload-button";

export function Navbar() {
    const router = useRouter()
    return (
        <nav className="flex min-w-full items-center justify-between py-3 px-12 container text-xl font-semibold border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Link href="/" className="flex gap-1 items-center justify-center"><Image />Gallery</Link>

            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <div className="flex justify-between items-center gap-2">

                        <UploadButton />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}