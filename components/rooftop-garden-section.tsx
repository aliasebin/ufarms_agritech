import { Building, Leaf, Wind, Scale } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function RooftopGardenSection() {
  return (
    <div>
      <FeatureCard
        title="Specialized Rooftop Garden Design"
        description="Transform your unused rooftop into a stunning garden oasis with our specialized design and installation services. We begin with a thorough structural assessment to ensure safety, then create custom designs that maximize your space while respecting weight limitations. Our rooftop gardens feature lightweight growing media, appropriate plant selections, and efficient irrigation systems designed specifically for elevated environments. Whether you're looking for a serene retreat, entertaining space, or even a productive vegetable garden, we create beautiful, functional rooftop environments that thrive in urban settings."
        images={[
          {
            src: "/Roof1.jpg?height=600&width=800&text=Rooftop+Garden+1",
            alt: "Modern rooftop garden design with seating areas and container plantings",
          },
          {
            src: "/Roof2.jpg?height=600&width=800&text=Rooftop+Garden+2",
            alt: "Urban rooftop garden with efficient irrigation system and lightweight planters",
          },
          {
            src: "/Roof3.jpg?height=600&width=800&text=Rooftop+Garden+3",
            alt: "Rooftop vegetable and herb garden with automated irrigation",
          },
        ]}
        icon={Building}
        reverse={true}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Scale className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Structural Assessment</h4>
          </div>
          <p>
            Comprehensive evaluation of your rooftop to ensure it can safely support a garden, with weight-appropriate
            design solutions.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Specialized Planting</h4>
          </div>
          <p>
            Selection of appropriate plants that can thrive in rooftop conditions, with lightweight growing media and
            containers.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Wind className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Weather Resilience</h4>
          </div>
          <p>
            Design considerations for wind exposure, temperature fluctuations, and other environmental factors unique to
            rooftop settings.
          </p>
        </div>
      </div>
    </div>
  )
}
