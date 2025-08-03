import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/nav";


export const metadata: Metadata = {
  title: "TAP IN",
  description: "Tap In to music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
