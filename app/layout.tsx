import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prashil Koirala | IT Support & Application Developer",
  description: "Darwin-based user and endpoint support technician, application developer, and Scrum Master.",
  openGraph: { title: "Prashil Koirala", description: "IT support instinct. Developer mindset.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Prashil Koirala", description: "IT support instinct. Developer mindset.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
