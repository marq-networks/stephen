import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Exclaim Sustainable Statement Tees",
  description: "Read Exclaim's terms of service for purchasing sustainable statement tees and eco-friendly clothing. Understand our policies and customer agreements.",
  keywords: "terms of service, customer agreement, sustainable fashion terms, eco-friendly clothing policies",
  openGraph: {
    title: "Terms of Service | Exclaim Sustainable Statement Tees",
    description: "Read Exclaim's terms of service for purchasing sustainable statement tees and eco-friendly clothing.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}