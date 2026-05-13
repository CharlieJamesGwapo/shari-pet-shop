import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shari Pet Shop — Lahat para sa Alaga Mo",
  description: "Pet shop online sa Pilipinas. Pets, food, accessories, at iba pa. Affordable, malinis, at de-kalidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
