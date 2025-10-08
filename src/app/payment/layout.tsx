import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | Exclaim Sustainable Statement Tees",
  description: "Complete your purchase of Exclaim's sustainable statement tees with our secure checkout. Multiple payment options available with SSL encryption.",
  keywords: "secure checkout, payment, sustainable tees purchase, eco-friendly clothing payment",
  openGraph: {
    title: "Secure Checkout | Exclaim Sustainable Statement Tees",
    description: "Complete your purchase of Exclaim's sustainable statement tees with our secure checkout.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}