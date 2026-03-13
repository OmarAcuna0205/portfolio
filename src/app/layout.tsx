import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Welcome to my portfolio website! I'm a passionate web developer specializing in creating stunning and functional websites. Explore my projects and skills, and feel free to get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
