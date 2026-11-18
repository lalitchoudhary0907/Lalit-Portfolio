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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (typeof window !== "undefined") { if ("scrollRestoration" in history) { history.scrollRestoration = "manual"; } if (window.location.hash === "#journey" || window.location.hash === "#time-journey") { history.replaceState(null, "", window.location.pathname); } window.scrollTo(0, 0); }`,
          }}
        />
      </head>
      <body className="bg-[#111010] text-[#F5F3EF] antialiased selection:bg-accent/20 selection:text-on-accent">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
