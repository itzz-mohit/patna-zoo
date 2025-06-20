import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ChatBot } from "@/components/chatbot"

export const metadata: Metadata = {
  title: "Patna Zoo - Sanjay Gandhi Biological Garden",
  description:
    "Discover wildlife conservation and amazing animals at Patna Zoo, home to Royal Bengal Tigers, Indian Elephants and many more species. Plan your visit today!",
  keywords: [
    "Patna Zoo",
    "Sanjay Gandhi Biological Garden",
    "Bihar wildlife",
    "zoo",
    "conservation",
    "animals",
    "family activities",
    "Bihar tourism",
  ],
  authors: [{ name: "Patna Zoo", url: "https://patnazoo.in" }],
  creator: "Patna Zoo Authority",
  publisher: "Government of Bihar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://patnazoo.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Patna Zoo - Sanjay Gandhi Biological Garden",
    description:
      "Discover wildlife conservation and amazing animals at Patna Zoo. Home to Royal Bengal Tigers, Indian Elephants and many endangered species. Plan your visit today!",
    url: "https://patnazoo.in",
    siteName: "Patna Zoo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Patna Zoo - Sanjay Gandhi Biological Garden",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patna Zoo - Sanjay Gandhi Biological Garden",
    description: "Discover wildlife conservation and amazing animals at Patna Zoo. Plan your visit today!",
    images: ["/twitter-image.jpg"],
    creator: "@PatnaZoo",
  },
  category: "tourism",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-zoo-teal-700 text-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <ScrollToTop />
          <ChatBot />
        </ThemeProvider>
        <footer className="text-center text-xs text-white/60 py-2 bg-zoo-teal-900">
          <p>
            Prototype designed by{" "}
            <a
              href="https://polardot.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Polardot.in
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
