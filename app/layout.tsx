import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jonshaw199.com"),
  title: {
    default: "Jon Shaw | Software engineer",
    template: "%s | Jon Shaw",
  },
  description:
    "Software engineer based in California building thoughtful products, systems, and digital experiences.",
  alternates: {
    canonical: "https://jonshaw199.com",
  },
  keywords: [
    "Jon Shaw",
    "software engineer",
    "California",
    "portfolio",
    "systems",
    "products",
  ],
  openGraph: {
    title: "Jon Shaw | Software engineer",
    description:
      "Software engineer based in California building thoughtful products, systems, and digital experiences.",
    url: "https://jonshaw199.com",
    siteName: "Jon Shaw",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jon Shaw homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon Shaw | Software engineer",
    description:
      "Software engineer based in California building thoughtful products, systems, and digital experiences.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
