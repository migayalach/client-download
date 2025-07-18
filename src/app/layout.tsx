import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeReview Downloader",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f8f9fa]">{children}</body>
    </html>
  );
}
