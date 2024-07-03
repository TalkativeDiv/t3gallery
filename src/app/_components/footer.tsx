import Link from "next/link"
import { Separator } from "~/components/ui/separator"
import { ModeToggle } from "./mode-toggle"

export function Footer() {
    return (
        <div>
            <Separator />
            <div className="flex justify-between items-center p-4">
                <div className="flex gap-1">{new Date().getFullYear()}<Link href="https://abhirath.net" className="underline">Abhi</Link></div>
                <ModeToggle />
            </div>
        </div>
    )
}

