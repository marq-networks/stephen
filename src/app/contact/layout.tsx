import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Exclaim - Get in Touch | Customer Support",
  description: "Contact Exclaim for questions about our sustainable statement tees, orders, or customer support. We're here to help with your eco-friendly fashion needs.",
  keywords: "contact Exclaim, customer support, sustainable fashion help, order assistance, eco-friendly clothing questions",
  openGraph: {
    title: "Contact Exclaim - Get in Touch | Customer Support",
    description: "Contact Exclaim for questions about our sustainable statement tees and customer support.",
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