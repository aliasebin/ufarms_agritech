import { Hammer, Grid, Droplets, Layers } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function StoneLayingSection() {
  return (
    <div>
      <FeatureCard
        title="Expert Stone Laying & Hardscaping"
        description="Enhance your outdoor spaces with our professional stone laying services. We create beautiful, durable pathways, patios, retaining walls, and decorative elements using a wide range of natural and engineered stone materials. Our expert craftsmen ensure proper installation with attention to drainage, stability, and longevity. We can incorporate lighting, water features, and planting areas to create cohesive outdoor living spaces that extend your home into the garden. From classic flagstone patios to modern architectural elements, we bring your vision to life with precision and artistry."
        images={[
          {
            src: "/Stone1.jpg?height=600&width=800&text=Stone+Laying+1",
            alt: "Professional stone patio installation with natural materials",
          },
          {
            src: "/Stone2.jpg?height=600&width=800&text=Stone+Laying+2",
            alt: "Custom stone pathway with integrated landscape lighting",
          },
          {
            src: "/Stone3.jpg?height=600&width=800&text=Stone+Laying+3",
            alt: "Decorative stone wall and garden feature installation",
          },
        ]}
        icon={Hammer}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Material Selection</h4>
          </div>
          <p>
            Wide range of natural and engineered stone options with expert guidance to select the perfect materials for
            your project.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Grid className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Custom Designs</h4>
          </div>
          <p>Personalized patterns and layouts that complement your landscape design and architectural style.</p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Droplets className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Proper Drainage</h4>
          </div>
          <p>
            Expert installation with appropriate drainage solutions to prevent water damage and ensure long-term
            durability.
          </p>
        </div>
      </div>
    </div>
  )
}
