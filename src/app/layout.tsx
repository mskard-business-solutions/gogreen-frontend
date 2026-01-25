import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Vidhi Enterprises | Precision Irrigation Solutions Since 1983",
  description: "Trusted manufacturer of Drip, Sprinkler & Micro Irrigation Products. Engineering Smart Irrigation Solutions for a Greener Tomorrow.",
  keywords: ["irrigation", "drip irrigation", "sprinkler", "agriculture", "Vidhi Enterprises"],
};

import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

// Force dynamic rendering for the root layout
export const dynamic = 'force-dynamic';

async function getGlobalSettings() {
  try {
    // Determine backend URL - usage of env var or default
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    
    // Skip during build if backend is not available
    if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === 'production') {
      console.warn('NEXT_PUBLIC_API_URL not set, skipping settings fetch during build');
      return null;
    }
    
    const res = await fetch(`${backendUrl}/settings`, {
      cache: "no-store",
    });
    
    if (!res.ok) return null;
    
    // API returns { success: true, data: { ... } }
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    // Silently return null on error - WhatsApp button just won't show
    console.error('Failed to fetch global settings:', error);
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getGlobalSettings();
  const whatsappNumber = settings?.whatsapp_number;

  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <TanStackProvider>{children}</TanStackProvider>
        <WhatsAppFloatingButton phoneNumber={whatsappNumber} />
      </body>
    </html>
  );
}
