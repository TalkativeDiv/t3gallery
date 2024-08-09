import { ModeToggle } from "./mode-toggle";

export function Footer() {
  return (
    // <div className="hidden md:block">
    //   <div className="hidden items-center justify-between p-4 md:flex">
    //     <div className="flex gap-1">
    //       {new Date().getFullYear()}
    //       <Link href="https://abhirath.net" className="underline">
    //         Abhi
    //       </Link>
    //     </div>
    //     <ModeToggle />
    //   </div>
    // </div>
    <p className="flex gap-1 p-1 text-sm">
      <span>{new Date().getFullYear()}</span>
      <a target="_blank" href="https://abhirath.net" className="underline">
        Abhi
      </a>
    </p>
  );
}
