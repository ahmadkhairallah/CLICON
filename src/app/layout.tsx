import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Suspense } from "react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLICON | Your One-Stop eCommerce Store",
  description:
    "Discover a wide range of products at CLICON. Shop electronics, fashion, and home essentials at unbeatable prices. Enjoy secure checkout and fast delivery!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CLICON, online shopping, eCommerce, electronics, fashion, home essentials, fast delivery" />
        <meta name="author" content="Ahmad khairallah" />
        {/* <meta name="theme-color" content="#FFFFFF" />
        <link rel="canonical" href="https://www.clicon.com" />
        <meta property="og:title" content="CLICON | Your One-Stop eCommerce Store" />
        <meta property="og:description" content="Shop electronics, fashion, and home essentials at unbeatable prices. Fast delivery guaranteed!" />
        <meta property="og:image" content="/images/logo/Icon(1).png" />
        <meta property="og:url" content="https://www.clicon.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CLICON | Your One-Stop eCommerce Store" />
        <meta name="twitter:description" content="Shop electronics, fashion, and home essentials at unbeatable prices. Fast delivery guaranteed!" />
        <meta name="twitter:image" content="/images/logo/Icon(1).png" />
        <meta name="twitter:site" content="@clicon_store" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 dark:text-gray-200 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
