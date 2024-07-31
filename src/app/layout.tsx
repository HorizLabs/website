// Style imports
import '@mantine/core/styles.css';
import "./globals.css";

// Type and component imports
import type { Metadata } from "next";
import { NavbarComponent } from "@/components/Navbar";
import { MantineProvider } from "@mantine/core";

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
        <MantineProvider>
          <NavbarComponent />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
