import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[#050508] text-slate-100 antialiased selection:bg-[#00F5D4]/20 selection:text-[#00F5D4]">
        {children}
      </body>
    </html>
  );
}
