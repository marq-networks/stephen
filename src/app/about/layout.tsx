import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ExClaim - Our Sustainable Fashion Mission | Stephen",
  description: "Learn About ExClaim's commitment to sustainable fashion. Discover our story, mission, and dedication to creating meaningful statement tees with eco-friendly materials.",
  keywords: "About ExClaim, sustainable fashion mission, eco-friendly clothing brand, bamboo cotton tees, conscious fashion story",
  openGraph: {
    title: "About ExClaim - Our Sustainable Fashion Mission",
    description: "Learn About ExClaim's commitment to sustainable fashion and our mission to create meaningful statement tees.",
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