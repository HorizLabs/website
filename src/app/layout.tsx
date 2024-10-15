import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon Labs",
  description: "Empowering students to succeed through research and competitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['OpenSans'] bg-blue-700">
        <>
          {children}
        </>
      </body>
    </html>
  );
}
