import { Droplet, Smartphone, CloudRain } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function DripIrrigationSection() {
  return (
    <div>
      <FeatureCard
        title="Water-Efficient Drip Irrigation & Automation"
        description="Maximize your garden's health while minimizing water usage with our advanced drip irrigation systems. Our precision installations deliver water directly to plant roots, reducing waste and promoting deeper root growth. We integrate smart controllers and sensors that automatically adjust watering schedules based on weather conditions, soil moisture, and plant needs. Control everything through our user-friendly mobile app, allowing you to monitor and manage your garden's irrigation from anywhere. Our systems are customizable for any garden size, from small residential gardens to large commercial landscapes."
        images={[
          {
            src: "/DripIrrigation.jpg?height=600&width=800&text=Drip+Irrigation+1",
            alt: "Precision drip irrigation system delivering water directly to plant roots",
          },
          {
            src: "/Drip2.jpg?height=600&width=800&text=Drip+Irrigation+2",
            alt: "Smart irrigation controller with weather-responsive programming",
          },
          {
            src: "/Drip3.jpg?height=600&width=800&text=Drip+Irrigation+3",
            alt: "Mobile app interface for controlling garden irrigation system",
          },
        ]}
        icon={Droplet}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Droplet className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Water Efficiency</h4>
          </div>
          <p>
            Precision water delivery that reduces consumption by up to 70% compared to conventional irrigation methods.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Smart Controls</h4>
          </div>
          <p>
            Automated systems with mobile app control, allowing you to manage your garden's irrigation from anywhere.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <CloudRain className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Weather Responsive</h4>
          </div>
          <p>
            Intelligent systems that automatically adjust watering schedules based on local weather conditions and
            forecasts.
          </p>
        </div>
      </div>
    </div>
  )
}
