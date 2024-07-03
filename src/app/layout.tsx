import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Inter } from "next/font/google";
import { extractRouterConfig } from "uploadthing/server";
import { Navbar } from "~/app/_components/topnav";
import { cn } from "~/lib/utils";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata = {
  title: "T3 Gallery",
  description: "The most based gallery in all of the internet 🗿",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(
          "bg-background dark font-sans antialiased w-full",
          inter.variable
        )}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <Navbar />
            <main className="overflow-y-scroll">{children}</main>
            {modal}
          </div>
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
