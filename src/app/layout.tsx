import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Template",
  description: "A modern, story-led website template for owner-operator service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
