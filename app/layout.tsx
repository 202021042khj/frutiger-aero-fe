import type { Metadata } from "next";
import { Fira_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import NotifyContainer from "@/components/ui/notify/notify-container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Humanist sans close to Frutiger and Segoe UI — see docs/DESIGN.md
const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Frutiger Aero — The future we were promised",
  description:
    "What Frutiger Aero was, what it was made of, and where the glossy future of 2004–2013 went.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${firaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <NotifyContainer />
      </body>
    </html>
  );
}
