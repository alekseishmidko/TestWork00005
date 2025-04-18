import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@ant-design/v5-patch-for-react-19";
import { Header } from "@/features/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
