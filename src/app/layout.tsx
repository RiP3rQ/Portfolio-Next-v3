import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocationProvider } from "@/providers/localization-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RiP3rQ's Portfolio",
  description:
    "Junior Fullstack Developer. Specializing in Next.js with passion for backend development and databases management.",
  alternates: {
    canonical: "https://riperq-codes.pro",
  },
  openGraph: {
    title: "RiP3rQ's Portfolio",
    description:
      "Junior Fullstack Developer. Specializing in Next.js with passion for backend development and databases management.",
    url: "https://riperq-codes.pro/preview.png",
  },
  applicationName: "RiP3rQ's Portfolio",
  creator: "RiP3rQ",
  generator: "Next.js",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Vercel",
    "Fullstack",
    "Developer",
    "Junior",
    "Mid",
    "Regular",
    "Backend",
    "Poland",
    "Remote",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@RiP3rQ",
    creator: "@RiP3rQ",
    title: "RiP3rQ's Portfolio",
    description:
      "Junior Fullstack Developer. Specializing in Next.js with passion for backend development and databases management.",
    images: [
      {
        url: "https://riperq-codes.pro/preview.png",
        alt: "RiP3rQ's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="10Sq2RwsVnvU-fikGubkgJXnDZdkXVt4EglfIiPqUX8"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          themes={["dark"]}
        >
          <LocationProvider>
            <Toaster />
            {children}
            <SpeedInsights />
            <Analytics />
            {process.env.NEXT_PUBLIC_ANALYTICS_TOKEN && (
              <Script
                src="https://cdn.rscl.it/ra.js"
                data-token={process.env.NEXT_PUBLIC_ANALYTICS_TOKEN}
                strategy="afterInteractive"
              />
            )}
          </LocationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
