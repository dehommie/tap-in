import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/nav";
import { createClient } from "@/utils/supabase/supabase-server";


export const metadata: Metadata = {
  title: "TAP IN",
  description: "Tap In to music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const supabase = createClient()

  // const {error, data : {user}} = await (await supabase).auth.getUser()

  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
