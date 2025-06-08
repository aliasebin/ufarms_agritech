import { Scissors, Calendar, Sprout, Shield } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function LawnMaintenanceSection() {
  return (
    <div>
      <FeatureCard
        title="Professional Lawn Installation & Maintenance"
        description="Achieve the perfect lawn with our comprehensive installation and maintenance services. We start with proper soil preparation and grading before installing premium grass varieties suited to your local climate and usage needs. Our ongoing maintenance programs keep your lawn lush, green, and healthy year-round with regular mowing, edging, fertilization, and pest control. Whether you're establishing a new lawn or revitalizing an existing one, our expert team delivers results that will make your neighbors green with envy."
        images={[
          {
            src: "/Lawn1.jpg?height=600&width=800&text=Lawn+Maintenance+1",
            alt: "Professional lawn installation with premium grass varieties",
          },
          
        ]}
        icon={Scissors}
        reverse={true}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Premium Installation</h4>
          </div>
          <p>
            Expert lawn installation with soil preparation, grading, and premium grass varieties selected for your
            specific conditions.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Regular Maintenance</h4>
          </div>
          <p>
            Scheduled maintenance visits for mowing, edging, and trimming to keep your lawn looking professionally
            manicured.
          </p>
        </div>
        <div className="card card-gradient transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="flex items-center mb-3">
            <div className="bg-gradient-blue-green p-3 rounded-full mr-3 group-hover:scale-110 transition-all duration-300">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gradient">Health Programs</h4>
          </div>
          <p>
            Comprehensive lawn health programs including fertilization, aeration, overseeding, and pest control
            treatments.
          </p>
        </div>
      </div>
    </div>
  )
}
