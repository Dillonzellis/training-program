import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MainNav from "@/components/MainNav";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-terminal",
});

export const metadata: Metadata = {
  title: "TRAINING_PROGRAM",
  description: "Track your workout routine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-terminal antialiased crt-scanlines crt-flicker",
          vt323.variable,
        )}
      >
        <MainNav />
        {children}
      </body>
    </html>
  );
}
