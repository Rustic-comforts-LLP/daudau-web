import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MatrixBackground from "@/components/effects/MatrixBackground";
import CustomCursor from "@/components/effects/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dau Dau | Modern Business Solutions & Agentic Workflows in India",
  description: "Dau Dau provides innovative digital solutions, from recruiting and HRMS to advanced POS systems and agentic workflows tailored for the Indian market and global businesses.",
  keywords: "Dau Dau, Agentic Workflow India, POS System India, HRMS, Recruiting services India, Travel Itinerary Studio, Business Solutions India, Tech provider India",
  authors: [{ name: "Dau Dau Team" }],
  creator: "Dau Dau",
  publisher: "Dau Dau",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-IN',
    },
  },
  openGraph: {
    title: "Dau Dau | Next-Gen Business Solutions in India",
    description: "Empowering organizations with agentic workflows, modern POS, and global recruiting standards based in India.",
    url: "https://daudau.in", 
    siteName: "Dau Dau",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dau Dau | Modern Business Solutions",
    description: "Empowering organizations with agentic workflows, modern POS, and HRMS in India.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans`}
      >
        <CustomCursor />
        <MatrixBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
