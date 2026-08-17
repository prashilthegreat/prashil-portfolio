import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prashilkoirala.com.np"),
  title: "Prashil Koirala | IT Support & Application Developer",
  description: "Darwin-based user and endpoint support technician, application developer, and Scrum Master.",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
  openGraph: { title: "Prashil Koirala", description: "IT support instinct. Developer mindset.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Prashil Koirala", description: "IT support instinct. Developer mindset.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
