import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSWrapper from "./AOSWrapper";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GearIT",
  description: "GearIT: Easy Purchase ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSWrapper>
          <SessionWrapper>
          {children}
          </SessionWrapper>
          <Toaster />
        </AOSWrapper>
      </body>
    </html>
  );
}
