import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Stephen - Our Sustainable Fashion Mission | Stephen",
  description: "Learn about Stephen's commitment to sustainable fashion. Discover our story, mission, and dedication to creating meaningful statement tees with eco-friendly materials.",
  keywords: "about stephen, sustainable fashion mission, eco-friendly clothing brand, bamboo cotton tees, conscious fashion story",
  openGraph: {
    title: "About Stephen - Our Sustainable Fashion Mission",
    description: "Learn about Stephen's commitment to sustainable fashion and our mission to create meaningful statement tees.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}