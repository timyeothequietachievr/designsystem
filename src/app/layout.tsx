import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Quiet Achiever Design System",
  description:
    "Reusable brand tokens, primitives, page patterns, and Tailwind UI blocks for The Quiet Achiever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
