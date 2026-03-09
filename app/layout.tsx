import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Space_Grotesk, Inter } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
