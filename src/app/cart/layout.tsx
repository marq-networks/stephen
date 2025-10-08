import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Exclaim Sustainable Statement Tees",
  description: "Review your Exclaim sustainable statement tees in your shopping cart. Secure checkout with free shipping on orders over $75.",
  keywords: "shopping cart, sustainable tees checkout, eco-friendly clothing cart, bamboo cotton tees order",
  openGraph: {
    title: "Shopping Cart | Exclaim Sustainable Statement Tees",
    description: "Review your Exclaim sustainable statement tees in your shopping cart.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}