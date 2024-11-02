import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://apavayan.com'),
  title: {
    template: '%s | Apavayan Sinha',
    default: 'Apavayan Sinha | Full Stack Developer',
  },
  description: "Apavayan Sinha is a Full Stack Developer based in India. He is a \
  tech enthusiast and loves to work on new technologies like Java, JavaScript, React,\
  Node.js, and many more.",
  creator: "Apavayan Sinha",
  keywords: [
    "Apavayan Sinha",
    "Full Stack Developer",
    "Software Developer",
  ],
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="relative scroll-smooth antialiased">
      <body
        className={`scrollbar-thin scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-600`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
