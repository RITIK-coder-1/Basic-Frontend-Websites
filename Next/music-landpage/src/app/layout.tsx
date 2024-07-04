import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Academy - Landing Page",
  description: "Find your favourite collection of Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
        <Navbar />
        </header>
        {children}
        </body>
    </html>
  );
}
