import type { Metadata } from "next";
import { Urbanist, Syne } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TenstackProviders } from "./tenstack-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Jatique | Full Stack Developer, Blockchain & AI Engineer",
  description: "Ezeja Emmanuel Chibuike (Jatique) - A passionate Full Stack, Blockchain, and AI Developer crafting seamless digital experiences with cutting-edge technology.",
  keywords: ["Jatique", "Ezeja Emmanuel", "Full Stack Developer", "Blockchain Developer", "AI Developer", "Web Development", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Jatique", url: "https://github.com/Ezejaemmanuel" }],
  creator: "Jatique",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Jatique | Full Stack Developer, Blockchain & AI Engineer",
    description: "Ezeja Emmanuel Chibuike (Jatique) - A passionate Full Stack, Blockchain, and AI Developer crafting seamless digital experiences with cutting-edge technology.",
    siteName: "Jatique Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jatique | Full Stack Developer, Blockchain & AI Engineer",
    description: "Ezeja Emmanuel Chibuike (Jatique) - A passionate Full Stack, Blockchain, and AI Developer crafting seamless digital experiences with cutting-edge technology.",
    creator: "@ezejaemmanuel36",
  },
  metadataBase: new URL("https://jatique.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${syne.variable}`}>
      <TenstackProviders>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <body>
            {children}
          </body>
        </TooltipProvider>
      </TenstackProviders>
    </html>
  );
}
