import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EXCLAIM - Premium Statement Apparel",
  description: "Express yourself with our premium collection of statement apparel. Sustainable, comfortable, and stylish clothing for those who dare to make a statement.",
  keywords: "fashion, apparel, sustainable clothing, premium fashion, statement wear, organic cotton, eco-friendly",
  authors: [{ name: "EXCLAIM" }],
  openGraph: {
    title: "EXCLAIM - Premium Statement Apparel",
    description: "Express yourself with our premium collection of statement apparel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'sans-serif' }}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
