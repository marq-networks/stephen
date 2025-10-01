import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Stephen Sustainable Statement Tees",
  description: "Read Stephen's privacy policy to understand how we protect your personal information when shopping for sustainable statement tees and eco-friendly clothing.",
  keywords: "privacy policy, data protection, sustainable fashion privacy, customer information security",
  openGraph: {
    title: "Privacy Policy | Stephen Sustainable Statement Tees",
    description: "Read Stephen's privacy policy and understand how we protect your personal information.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}