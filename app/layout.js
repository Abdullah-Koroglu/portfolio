import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

// Update the metadata
export const metadata = {
  title: "Abdullah Koroglu | Full Stack Developer",
  description: "Full Stack Developer specializing in JavaScript, React, Node.js, and more",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" >
          <div className="flex min-h-screen flex-col items-center">
            <Navbar />
            <main className="flex-1 w-2/3 mx-auto">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
