import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Lalit Choudhary | Full-Stack Engineer & WorldQuant Gold Medalist",
  description:
    "Interactive 3D Portfolio of Lalit Choudhary — Creator of FocusFlow, WorldQuant BRAIN Gold Medalist, and Open Source Contributor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#111010] text-[#F5F3EF] antialiased selection:bg-[#FF5722]/25 selection:text-[#F5F3EF]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
