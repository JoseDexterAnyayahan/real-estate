import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SocialFloat from "@/components/layout/SocialFloat";

export const metadata: Metadata = {
  title: "MVP Properties | Premium Real Estate Philippines",
  description:
    "Discover premium residential and commercial properties across the Philippines. Buy, sell, or rent with MVP Properties.",
  keywords: "real estate philippines, properties for sale, condo for rent, house and lot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>
          {children}
          <SocialFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}