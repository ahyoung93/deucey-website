import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deucey - Tennis just got more fun",
  description: "Track your tennis matches, tag hitting partners, and share your progress. The social tennis app for players who love the game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-green-50">
        {children}
      </body>
    </html>
  );
}
