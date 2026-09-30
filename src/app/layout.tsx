import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudhanshu Pandey — Software Engineer | AI • Cloud • DevOps",
  description:
    "Portfolio of Sudhanshu Pandey — engineering student building real products at the intersection of AI, cloud, DevOps and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
