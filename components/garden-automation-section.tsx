import { Settings, Calendar, Zap, Activity } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function GardenAutomationSection() {
  return (
    <div>
      <FeatureCard
        title="Comprehensive Garden Automation & Maintenance"
        description="Keep your garden beautiful year-round with minimal effort through our integrated automation and maintenance services. We combine smart technology with professional care to ensure your garden thrives in every season. Our automation systems control irrigation, lighting, and even climate features in greenhouse spaces, while our scheduled maintenance visits handle all the essential gardening tasks. From seasonal planting and pruning to fertilization and pest management, our expert team provides complete care while our smart systems handle daily operations, giving you a gorgeous garden without the time commitment."
        images={[
          {
            src: "/Maintinance1.jpg?height=600&width=800&text=Garden+Automation+1",
            alt: "Smart garden automation system controlling irrigation and lighting",
          },
          {
            src: "/Maintinance2.jpg?height=600&width=800&text=Garden+Automation+2",
            alt: "Professional garden maintenance team performing seasonal care",
          },
          
        ]}
        icon={Settings}
        reverse={true}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Smart Integration</h4>
          </div>
          <p>
            Integrated automation systems that control irrigation, lighting, and other garden features through a single
            interface.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Scheduled Care</h4>
          </div>
          <p>
            Regular maintenance visits by our professional team to handle seasonal planting, pruning, fertilization, and
            pest control.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Health Monitoring</h4>
          </div>
          <p>
            Advanced monitoring systems that track soil conditions, plant health, and system performance to prevent
            problems.
          </p>
        </div>
      </div>
    </div>
  )
}
