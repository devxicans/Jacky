import type { Metadata } from "next";
import { Inter, Pacifico, Alegreya } from "next/font/google";
import Rodchenko from "next/font/local";

import "./globals.css";
import { Navbar } from "./components/nav-bar";
import { Footer } from "./components/footer";

const rodchenko = Rodchenko({
  src: "../../public/font/Rodchenko.ttf",
  display: "swap",
  variable: "--font-rodchenko",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
  weight: "400",
});
const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Cochera",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pacifico.variable} ${alegreya.variable} ${rodchenko.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
