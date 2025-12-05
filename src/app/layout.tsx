import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganesha Agro Hub — Premium Pulses & Spices",
  description: "Ganesha Agro Hub — farm-to-table pulses & spices from Jabalpur. Premium quality, traceability and sustainable sourcing.",
  icons: {
    icon: "/ganesha-agro-hub-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
