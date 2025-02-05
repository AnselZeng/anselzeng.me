import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hey i'm ansel :)",
  description: "my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
