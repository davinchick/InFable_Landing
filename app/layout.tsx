import type { Metadata } from "next";
import { Pridi } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Pridi({ subsets: ["latin"], weight: "200" });

export const metadata: Metadata = {
  title: "Infable Game Studio",
  description: "Modern & Gorgeous game studio",
  applicationName: "Modern & Gorgeous game studio",
  authors: [
    {
      name: "Alexey Tymakov",
      url: "https://github.com/davinchick/infable_landing",
    },
    {
      name: "Anastasiya Noir",
      url: "https://github.com/davinchick/infable_landing",
    },
  ],
  generator: "game studio, Gamedev, blog, InFable", // keywords
  keywords: "game studio, Gamedev, blog, InFable", // keywords
  colorScheme: "dark",
  creator: "InFable Game Studio",
  robots: "index, follow",
  icons: "./InfableLOGO.png",
  category: "gamedev",
  // twitter: "http://twitter.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/InfableLOGO.png.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
