import type React from "react";
import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";/* 
import { Analytics } from "@vercel/analytics/next"; */
import { Suspense } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "DespejarApp",
  description: "Hub para relajarse y respirar otro aire.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${defaultUrl}/site.webmanifest`,
  alternates: {
    canonical: defaultUrl,
    languages: { "es-AR": "/es-AR", "en-US": "/en-US" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-title" content="Despejar App" />
      </head>
      <body className={`font-sans ${poppins.variable} ${dmSans.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
