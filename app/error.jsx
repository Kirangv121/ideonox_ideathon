"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Something went wrong</h1>
        <p className="text-gray-300 mb-8">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="outline" className="border-white text-white hover:bg-white/10">
            Try again
          </Button>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
