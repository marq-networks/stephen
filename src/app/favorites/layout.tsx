import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Favorites | Exclaim Sustainable Statement Tees",
  description: "View your favorite Exclaim sustainable statement tees. Save and organize your preferred eco-friendly clothing items for easy shopping.",
  keywords: "favorite tees, saved items, sustainable fashion wishlist, eco-friendly clothing favorites",
  openGraph: {
    title: "Your Favorites | Exclaim Sustainable Statement Tees",
    description: "View your favorite Exclaim sustainable statement tees and eco-friendly clothing items.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}