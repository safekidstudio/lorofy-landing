import type { Metadata } from "next";
import { Fredoka, Geist_Mono, Nerko_One } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import thumbnail from "@/assets/images/thumbnail.png";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

const nerkoOne = Nerko_One({
  subsets: ["latin"],
  variable: "--font-nerko",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://app.lorofy.space"),
  title: {
    default: "Lorofy — Focus & Grow",
    template: "%s | Lorofy",
  },
  description:
    "Lorofy turns your deep-work sessions into a living botanical garden. Stay focused, track habits, and grow rare flora with every timer you complete.",
  keywords: [
    "focus app",
    "productivity",
    "pomodoro",
    "plant growing",
    "habit tracker",
    "deep work",
    "botanical garden",
    "study timer",
  ],
  authors: [{ name: "Lorofy Team", url: "https://app.lorofy.space" }],
  creator: "Lorofy",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Lorofy — Focus & Grow",
    description:
      "Lorofy turns your deep-work sessions into a living botanical garden. Stay focused, track habits, and grow rare flora.",
    url: "https://app.lorofy.space",
    siteName: "Lorofy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: thumbnail.src,
        width: thumbnail.width,
        height: thumbnail.height,
        alt: "Lorofy — Focus & Grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorofy — Focus & Grow",
    description:
      "Lorofy turns your deep-work sessions into a living botanical garden. Stay focused and grow rare flora.",
    creator: "@lorofyapp",
    images: [thumbnail.src],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        fredoka.variable,
        nerkoOne.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col w-full overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
