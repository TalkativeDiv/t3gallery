import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Inter } from "next/font/google";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { cn } from "~/lib/utils";
import { Navbar } from "~/components/topnav";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background dark font-sans antialiased w-full flex flex-col gap-4",
          inter.variable
        )}> <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          /><Navbar />{children}</body>
      </html>
    </ClerkProvider>
  );
}
