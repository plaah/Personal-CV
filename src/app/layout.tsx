import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Portofolio | [Nama Anda]',
  description: 'Portofolio pribadi modern dengan Next.js, Tailwind CSS, dan Framer Motion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portofolio | [Nama Anda]</title>
      </head>
      <body className="font-sans bg-background text-white">
        {children}
      </body>
    </html>
  )
}
