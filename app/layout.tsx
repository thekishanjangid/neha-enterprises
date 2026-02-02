import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neha Enterprises | Custom Furniture & Glass Partitions in Jaipur",
    template: "%s | Neha Enterprises",
  },
  description:
    "Premium custom furniture manufacturing, glass & aluminium partitions, and furniture hardware in Jaipur. 15+ years of craftsmanship. Get a free consultation today.",
  keywords: [
    "custom furniture Jaipur",
    "furniture manufacturer Jaipur",
    "glass partition Jaipur",
    "aluminium partition work",
    "modular wardrobe Jaipur",
    "office partition Jaipur",
    "furniture hardware Jaipur",
    "interior solutions Jaipur",
    "Neha Enterprises",
  ],
  openGraph: {
    title: "Neha Enterprises | Custom Furniture & Glass Partitions in Jaipur",
    description:
      "Premium custom furniture, glass partitions & complete interior solutions. 15+ years, 2000+ projects. Get a free consultation.",
    url: "https://www.nehaenterprises.in",
    siteName: "Neha Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.nehaenterprises.in" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Neha Enterprises",
  description:
    "Custom furniture manufacturing, glass & aluminium partitions, and furniture hardware in Jaipur, Rajasthan",
  url: "https://www.nehaenterprises.in",
  telephone: "+919876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123, Industrial Area",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302001",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
      </body>
    </html>
  );
}
