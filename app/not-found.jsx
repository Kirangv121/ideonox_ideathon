import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
