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
  title: "Jon | Home",
  description: "Personal homepage with links to writing, profile, and work.",
  alternates: {
    canonical: "https://jonshaw199.com",
  },
  openGraph: {
    title: "Jon | Home",
    description: "Personal homepage with links to writing, profile, and work.",
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
    title: "Jon | Home",
    description: "Personal homepage with links to writing, profile, and work.",
    images: ["/opengraph-image"],
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
