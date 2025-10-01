import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Sustainable Statement Tees | Stephen Collection",
  description: "Browse Stephen's complete collection of sustainable statement tees. Premium bamboo-cotton blend clothing with meaningful messages. Free shipping on orders over $75.",
  keywords: "shop statement tees, sustainable clothing store, bamboo cotton tees, eco-friendly apparel, conscious fashion shopping",
  openGraph: {
    title: "Shop Sustainable Statement Tees | Stephen Collection",
    description: "Browse Stephen's complete collection of sustainable statement tees made from premium bamboo-cotton blend.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}