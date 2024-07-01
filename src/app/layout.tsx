import "~/styles/globals.css";

import { Navbar } from "./_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

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
        <body className={`${inter.variable} bg-slate-950 text-white w-full antialiased font-sans flex flex-col gap-4`}><Navbar />{children}</body>
      </html>
    </ClerkProvider>
  );
}
