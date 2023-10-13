import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Helper-AI",
  applicationName: "Helper-AI",
  description: "AI Platform to improve your productivity.",
  metadataBase: new URL("https://helper-ai.vercel.app/"),
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Helper-AI",
    description: "AI Platform for productivity improvement.",
    siteName: "Helper-AI",
    type: "website",
    images: { url: "https://helper-ai.vercel.app/og/og_main.png", width: 1200, height: 630 },
  },
  twitter: {
    title: "Helper-AI",
    description: "AI Platform for productivity improvement.",
    images: "https://helper-ai.vercel.app/og/og_main.png",
  },
  manifest: "/favicon/site.webmanifest",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
