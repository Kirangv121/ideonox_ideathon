import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import NetworkBackground from "@/components/network-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ideonox 2025 - Innovation Challenge",
  description: "Join the Ideonox 2025 Ideathon and showcase your innovative ideas.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NetworkBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
