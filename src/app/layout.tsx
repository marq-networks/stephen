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
  title: "Exclaim - Sustainable Statement Tees",
  description: "Express yourself with our premium collection of sustainable statement tees. Eco-friendly bamboo-cotton blend clothing with meaningful messages for conscious consumers.",
  keywords: "sustainable fashion, statement tees, eco-friendly clothing, bamboo cotton, organic apparel, conscious fashion, meaningful clothing",
  authors: [{ name: "Stephen" }],
  icons: {
    icon: [
      { url: '/LOGO.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/LOGO.png?v=3', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/LOGO.png?v=3',
    apple: '/LOGO.png?v=3',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/LOGO.png?v=3',
    },
  },
  openGraph: {
    title: "Exclaim - Sustainable Statement Tees",
    description: "Express yourself with our premium collection of sustainable statement tees.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/LOGO.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/LOGO.png?v=3" />
        <link rel="shortcut icon" href="/LOGO.png?v=3" />
        <link rel="apple-touch-icon" href="/LOGO.png?v=3" />
        <link rel="apple-touch-icon-precomposed" href="/LOGO.png?v=3" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'sans-serif' }}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-black px-3 py-2 rounded-md shadow"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
