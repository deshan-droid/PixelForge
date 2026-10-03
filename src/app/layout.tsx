import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/experience/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "PixelForge — Where Design Meets Technology";

const siteDescription =
  "PixelForge builds premium websites, web applications, and digital experiences for businesses, startups, brands, and organizations in Sri Lanka and worldwide.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s — PixelForge",
  },
  description: siteDescription,
  applicationName: "PixelForge",
  keywords: [
    "PixelForge",
    "web development Sri Lanka",
    "website development Sri Lanka",
    "web applications Sri Lanka",
    "web design Sri Lanka",
    "software development Sri Lanka",
    "React development",
    "Spring Boot development",
  ],
  authors: [
    {
      name: "PixelForge",
    },
  ],
  creator: "PixelForge",
  publisher: "PixelForge",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: "PixelForge",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}