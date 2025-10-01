import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephen Blog - Sustainable Fashion Insights & Style Tips",
  description: "Explore Stephen's blog for sustainable fashion insights, style tips, and stories about eco-friendly clothing. Learn about conscious fashion and sustainable living.",
  keywords: "sustainable fashion blog, eco-friendly style tips, conscious fashion insights, bamboo cotton care, sustainable living",
  openGraph: {
    title: "Stephen Blog - Sustainable Fashion Insights & Style Tips",
    description: "Explore Stephen's blog for sustainable fashion insights and eco-friendly style tips.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}