import Link from "next/link";
import { Separator } from "~/components/ui/separator";
import { ModeToggle } from "./mode-toggle";

export function Footer() {
  return (
    <div className="hidden md:block">
      <Separator />
      <div className="hidden items-center justify-between p-4 md:flex">
        <div className="flex gap-1">
          {new Date().getFullYear()}
          <Link href="https://abhirath.net" className="underline">
            Abhi
          </Link>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
