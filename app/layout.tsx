import type { Metadata, Viewport } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import fjordBackground from "@/public/winter-fjord-impasto.webp";
import "./globals.css";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tools.astar.sh"),
  title: {
    default: "Astar Tools — Tools for building AI that works",
    template: "%s — Astar Tools",
  },
  description:
    "An open, curated directory of practical tools for building useful, inspectable AI systems.",
  applicationName: "Astar Tools",
  authors: [{ name: "Astar", url: "https://astar.sh" }],
  creator: "Astar",
  publisher: "Astar",
  keywords: [
    "AI tools",
    "open source",
    "AI engineering",
    "evaluation",
    "robotics",
    "infrastructure",
    "Norway",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: "/",
    siteName: "Astar Tools",
    title: "Tools for building AI that works.",
    description: "Astar’s curated directory for useful, inspectable AI systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools for building AI that works.",
    description: "Astar’s curated directory for useful, inspectable AI systems.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e5e8e3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <div className="site-background" aria-hidden="true">
          <Image
            src={fjordBackground}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            preload
          />
        </div>
        {children}
      </body>
    </html>
  );
}
