
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./styles/globals.css";
import NavBar from "./ui/components/Navbar";

export const metadata: Metadata = {
  title: "LMM Estetica",
  description: "Tienda Online de LMM Estetica©",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <NavBar/>
          {children}
      </body>
    </html>
  );
}
