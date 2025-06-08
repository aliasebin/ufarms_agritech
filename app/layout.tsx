import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import WhatsAppButton from "@/components/whatsapp-button"
import BackToTop from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ufarms.io | Smart Irrigation & IoT Farming Solutions",
  description:
    "Ufarms provides advanced sprinkler irrigation systems, lawn automation, IoT-enabled controls, and smart farming solutions. Our app-controlled, timer-based irrigation with smart sensors ensures optimal water usage and maximum crop yields.",
  keywords: [
    "sprinkler irrigation",
    "lawn automation",
    "automated irrigation",
    "timer-based controls",
    "app controlled irrigation",
    "IoT irrigation",
    "smart farming",
    "smart sensors",
    "water conservation",
    "drip irrigation",
    "hydroponic farming",
    "precision agriculture",
    "garden lights automation",
    "temperature monitoring",
    "irrigation technology",
    "smart garden",
    "water efficiency",
    "farm automation",
  ],
  authors: [{ name: "Ufarms.io" }],
  creator: "Ufarms.io",
  publisher: "Ufarms.io",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ufarms.io/",
    title: "Ufarms.io | Smart Irrigation & IoT Farming Solutions",
    description:
      "Advanced sprinkler irrigation systems, lawn automation, IoT-enabled controls, and smart farming solutions for optimal water usage and maximum crop yields.",
    siteName: "Ufarms.io",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ufarms.io - Smart Irrigation & IoT Farming Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ufarms.io | Smart Irrigation & IoT Farming Solutions",
    description:
      "Advanced sprinkler irrigation systems, lawn automation, IoT-enabled controls, and smart farming solutions for optimal water usage and maximum crop yields.",
    images: ["/twitter-image.jpg"],
    creator: "@ufarmsio",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
  alternates: {
    canonical: "https://ufarms.io",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1976D2" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
