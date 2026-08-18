import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prashilkoirala.com.np"),
  title: "Prashil Koirala | User & Endpoint Support",
  description: "Darwin-based user and endpoint support technician focused on dependable Microsoft-first support, clear communication, and reliable outcomes.",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
  openGraph: { title: "Prashil Koirala", description: "Calm user support. Reliable endpoints.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Prashil Koirala", description: "Calm user support. Reliable endpoints.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
