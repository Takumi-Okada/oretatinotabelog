import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "俺たちの食べログ",
  description: "俺たちの俺たちによる俺たちのための食べログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className + ' bg-neutral-100'}>
        <div className="max-w-lg mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
