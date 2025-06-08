import { Flower, Droplet, Ruler, PenTool } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function LandscapeDesignSection() {
  return (
    <div>
      <FeatureCard
        title="Professional Landscape Design & Irrigation"
        description="Transform your outdoor space with our expert landscape design services that blend aesthetics with functionality. Our team of experienced designers creates custom plans tailored to your property, preferences, and local climate. We integrate smart irrigation systems directly into the design process, ensuring your landscape not only looks beautiful but is also water-efficient and sustainable. From initial concept to final installation, we handle every aspect of bringing your dream garden to life."
        images={[
          {
            src: "/LandscapeDesign.jpg?height=600&width=800&text=Landscape+Design+1",
            alt: "Professional landscape design with integrated irrigation system",
          },
          {
            src: "/LandscapeDesign2.jpg?height=600&width=800&text=Landscape+Design+2",
            alt: "Custom garden design with water features and smart irrigation",
          },
        
        ]}
        icon={Flower}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <PenTool className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Custom Design</h4>
          </div>
          <p>
            Personalized landscape designs that reflect your style and complement your home's architecture while
            maximizing your outdoor living space.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Droplet className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Integrated Irrigation</h4>
          </div>
          <p>
            Smart irrigation systems designed as part of your landscape plan, ensuring efficient water use and optimal
            plant health.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Ruler className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Full Implementation</h4>
          </div>
          <p>
            Complete installation services that bring your design to life, from hardscaping and planting to lighting and
            irrigation setup.
          </p>
        </div>
      </div>
    </div>
  )
}
