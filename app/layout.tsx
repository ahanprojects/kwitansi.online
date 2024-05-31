import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwitansi Online - Buat Kwitansi Digital dengan Mudah",
  description: "Buat kwitansi digital dengan mudah dan cepat di Kwitansi Online. Cocok untuk kebutuhan anda di Indonesia",
  keywords: "kwitansi online, kwitansi digital, buat kwitansi, kwitansi bisnis, Indonesia",
  robots: "index, follow",
  openGraph: {
    title:"Kwitansi Online - Buat Kwitansi Digital dengan Mudah",
    description: "Buat kwitansi digital dengan mudah dan cepat di Kwitansi Online. Cocok untuk kebutuhan anda di Indonesia",
    url: "https://www.kwitansi.online/",
    type: "website",

  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
