import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ansel zeng | home",
    template: "ansel zeng | %s",
  },
  description: "CS & business student passionate about software development and creating meaningful user experiences",
  keywords: ["portfolio", "software engineer", "product management", "UX design", "Ansel Zeng"],
  authors: [{ name: "Ansel Zeng" }],
  openGraph: {
    title: "ansel zeng",
    description: "CS & business student passionate about software development and creating meaningful user experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=gambetta@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={dmSans.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
