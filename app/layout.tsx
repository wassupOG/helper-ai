import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Helper-AI",
  applicationName: "Helper-AI",
  description: "AI Platform to improve your productivity.",
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

/* 
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" /><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
<link rel="manifest" href="/favicon/site.webmanifest" />
*/
