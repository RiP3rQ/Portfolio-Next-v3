import type { Metadata, Viewport } from "next";
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
  title: "RiP3rQ - Fullstack developer",
  description:
    "Fullstack Developer with a dedicated focus on coding since 2018. Proficient in Next.js, with a strong emphasis on backend development and database management.",
  alternates: {
    canonical: "https://riperq-codes.pro",
  },
  openGraph: {
    title: "RiP3rQ - Fullstack developer",
    description:
      "Fullstack Developer with a dedicated focus on coding since 2018. Proficient in Next.js, with a strong emphasis on backend development and database management.",
    url: "https://riperq-codes.pro",
    images: [
      {
        url: "https://riperq-codes.pro/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
  },
  applicationName: "RiP3rQ - Fullstack developer",
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
    title: "RiP3rQ - Fullstack developer",
    description:
      "Fullstack Developer with a dedicated focus on coding since 2018. Proficient in Next.js, with a strong emphasis on backend development and database management.",
    images: [
      {
        url: "https://riperq-codes.pro/preview.png",
        alt: "RiP3rQ - Fullstack developer",
      },
    ],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  robots: {
    index: true, // Allow the page to be indexed by search engines
    follow: true, // Allow search engines to follow links on the page
    nocache: false, // Allow search engines to cache the page for potentially faster loading times
    googleBot: {
      index: true, // Allow Google to index the page
      follow: true, // Allow Google to follow links on the page
      noimageindex: false, // Allow Google to index images, if you have important visuals
      "max-video-preview": 0, // Allow video previews if applicable
      "max-image-preview": "large", // Allow large image previews for better visibility in search results
      "max-snippet": -1, // Allow full text snippets, which can be beneficial for SEO
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#4b1575",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <meta property="og:site_name" content="RiP3rQ - Fullstack developer" />
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
