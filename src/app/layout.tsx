import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Inter, Roboto_Mono } from 'next/font/google'
import { SceneProvider } from "@/context/SceneContext";
import { ParallaxScene } from "@/components/ParallaxScene";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://apavayan.com'),
  title: {
    template: '%s | Apavayan Sinha',
    default: 'Apavayan Sinha | Full Stack Developer & Software Engineer',
  },
  description: "Apavayan Sinha is a passionate Full Stack Developer and Software Engineer based in India. \
  Specializing in modern web technologies including React, Next.js, Node.js, and Java. \
  Building innovative solutions and creating seamless user experiences.",
  applicationName: 'Apavayan Portfolio',
  authors: [{ name: 'Apavayan Sinha', url: 'https://apavayan.com' }],
  generator: 'Next.js',
  keywords: [
    "Apavayan",
    "Apavayan Sinha",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Java Developer",
    "Web Development",
    "Portfolio",
    "Software Development",
  ],
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apavayan.com',
    siteName: 'Apavayan Portfolio',
    title: 'Apavayan Sinha | Full Stack Developer & Software Engineer',
    description: 'Portfolio website of Apavayan Sinha, a Full Stack Developer and Software Engineer based in India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apavayan Sinha | Full Stack Developer & Software Engineer',
    description: 'Portfolio website of Apavayan Sinha, a Full Stack Developer and Software Engineer based in India.',
    creator: '@apavayan',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'msapplication-TileColor': '#2b5797',
    'theme-color': '#ffffff',
  },
};

// JSON-LD Schema for enhanced search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Apavayan Sinha",
  "url": "https://apavayan.com",
  "image": "https://apavayan.com/apavayan.png",
  "sameAs": [
    "https://github.com/aapav01",
    "https://linkedin.com/in/apavayan",
    "https://twitter.com/apavayan"
  ],
  "jobTitle": "Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Twelve Nexus"
  },
  "description": "Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, and Java",
  "knowsAbout": [
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Software Engineering"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Lucknow"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "India"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://apavayan.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${roboto_mono.variable} relative scroll-smooth antialiased`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`scrollbar-thin scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-600`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SceneProvider>
            <ParallaxScene />
            <div>{children}</div>
          </SceneProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
