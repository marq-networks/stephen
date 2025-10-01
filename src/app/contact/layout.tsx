import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Stephen - Get in Touch | Customer Support",
  description: "Contact Stephen for questions about our sustainable statement tees, orders, or customer support. We're here to help with your eco-friendly fashion needs.",
  keywords: "contact stephen, customer support, sustainable fashion help, order assistance, eco-friendly clothing questions",
  openGraph: {
    title: "Contact Stephen - Get in Touch | Customer Support",
    description: "Contact Stephen for questions about our sustainable statement tees and customer support.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}