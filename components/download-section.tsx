import { Button } from "@/components/ui/button"
import { Download, FileText, Smartphone } from "lucide-react"

export default function DownloadSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gradient-border">
        <div className="bg-gradient-blue-green rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gradient mb-3">Product Brochure</h3>
        <p className="text-gray-700 mb-6">
          Download our comprehensive product brochure with detailed specifications and case studies.
        </p>
        <Button variant="default" className="button-modern">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gradient-border">
        <div className="bg-gradient-blue-green rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Smartphone className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gradient mb-3">Mobile App</h3>
        <p className="text-gray-700 mb-6">
          Control your irrigation systems from anywhere with our easy-to-use mobile application.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-black hover:bg-black/90 rounded-full">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5,1.5h-11c-2.8,0-5,2.2-5,5v11c0,2.8,2.2,5,5,5h11c2.8,0,5-2.2,5-5v-11C22.5,3.7,20.3,1.5,17.5,1.5z M12,18.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S12.8,18.5,12,18.5z M13.5,10.5h-3v-6h3V10.5z" />
            </svg>
            App Store
          </Button>
          <Button className="bg-gradient-green-yellow hover:shadow-lg rounded-full">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.5,20.5v-17c0-1.1,0.9-2,2-2h13c1.1,0,2,0.9,2,2v17c0,1.1-0.9,2-2,2h-13C4.4,22.5,3.5,21.6,3.5,20.5z M12,19.5c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5S11.2,19.5,12,19.5z M6.5,15.5h11v-12h-11V15.5z" />
            </svg>
            Google Play
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gradient-border">
        <div className="bg-gradient-blue-green rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gradient mb-3">Installation Guide</h3>
        <p className="text-gray-700 mb-6">
          Step-by-step instructions for setting up and configuring your Ufarms irrigation system.
        </p>
        <Button variant="default" className="button-modern">
          <Download className="h-4 w-4 mr-2" />
          Download Guide
        </Button>
      </div>
    </div>
  )
}
