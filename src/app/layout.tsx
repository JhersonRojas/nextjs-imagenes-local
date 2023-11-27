import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 14 imagenes",
  description: "Proyecto para almacenar imagenes con Next.js 14",
};

interface RootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
