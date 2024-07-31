// Style imports
import "./globals.css";
import '@/css/mobile_compatibility.css'

// Type and component imports
import type { Metadata } from "next";
import { NavbarComponent } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Horizon Labs",
  description: "Innovate, Lead, Inspire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <NavbarComponent />
          {children}
      </body>
    </html>
  );
}
