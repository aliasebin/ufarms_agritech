import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-primary hover:bg-primary/90 w-full">
            <Link href="/">Return Home</Link>
          </Button>
          <p className="text-sm text-gray-500">
            Looking for irrigation solutions? Check out our{" "}
            <Link href="/#landscape-irrigation" className="text-primary hover:underline">
              landscape irrigation
            </Link>
            ,{" "}
            <Link href="/#drip-irrigation" className="text-primary hover:underline">
              drip irrigation
            </Link>
            , or{" "}
            <Link href="/#hydroponic-farm" className="text-primary hover:underline">
              hydroponic systems
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
