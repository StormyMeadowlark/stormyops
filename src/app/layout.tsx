import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://stormyops.com"),
  title: {
    default: "StormyOps | Ashlee Herken",
    template: "%s | StormyOps",
  },
  description:
    "StormyOps is the portfolio of Ashlee Herken, an Implementation Specialist and systems-minded operator focused on SaaS delivery, workflow design, engineering, and adoption.",
  applicationName: "StormyOps",
  authors: [{ name: "Ashlee Herken" }],
  creator: "Ashlee Herken",
  publisher: "Ashlee Herken",
  keywords: [
    "Ashlee Herken",
    "StormyOps",
    "Implementation Specialist",
    "SaaS Implementation",
    "Implementation Manager",
    "Client Onboarding",
    "Workflow Design",
    "Systems Design",
    "Software Delivery",
    "Full Stack Developer",
    "Operator",
    "Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "StormyOps | Ashlee Herken",
    description:
      "Portfolio of Ashlee Herken — Implementation Specialist, operator, and engineer focused on SaaS delivery, systems design, and workflow execution.",
    url: "https://stormyops.com",
    siteName: "StormyOps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StormyOps | Ashlee Herken",
    description:
      "Portfolio of Ashlee Herken — Implementation Specialist, operator, and engineer focused on SaaS delivery, systems design, and workflow execution.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}