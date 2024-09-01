import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafli Afriza Nugraha",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` font-inter overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#888888] scrollbar-track-[#1E252D]`}>{children}</body>
    </html>
  );
}
