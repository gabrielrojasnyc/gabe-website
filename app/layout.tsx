import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Gabriel Rojas | AI Innovation & Product Strategy",
  description: "Driving product excellence through AI innovation. Portfolio of Gabriel Rojas, Head of Product AI.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-black text-white min-h-screen selection:bg-rose-500 selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
