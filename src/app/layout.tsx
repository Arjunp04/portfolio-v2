import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://arjun-prajapati.vercel.app/"),
  title: {
    default: "Arjun Prajapati | Frontend Developer",
    template: "%s | Arjun Prajapati",
  },
  description:
    "Frontend Developer building responsive, scalable web applications with React, Next.js and modern web technologies.",
  keywords: [
    "Arjun Prajapati",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Arjun Prajapati" }],
  openGraph: {
    type: "website",
    url: "https://arjun-prajapati.vercel.app/",
    title: "Arjun Prajapati | Frontend Developer",
    description:
      "Frontend Developer building responsive, scalable web applications with React, Next.js and modern web technologies.",
    siteName: "Arjun Prajapati Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arjun Prajapati - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Prajapati | Frontend Developer",
    description:
      "Frontend Developer building responsive, scalable web applications with React, Next.js and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arjun Prajapati",
  jobTitle: "Frontend Developer",
  url: "https://arjun-prajapati.vercel.app/",
  sameAs: [
    "https://github.com/Arjunp04/",
    "https://www.linkedin.com/in/arjun-prajapati-4ba91b285/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
