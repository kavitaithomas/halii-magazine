import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ephesis } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/NavBar";

const coterie = localFont({
  src: "../pngs/coterie-regular.woff",
  variable: "--font-coterie",
  display: "swap",
});

const ephesis = Ephesis({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ephesis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halii Magazine",
  description: "Lifestyle magazine based in Halifax, Nova Scotia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${coterie.variable} ${ephesis.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
