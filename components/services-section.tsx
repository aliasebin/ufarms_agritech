import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollToSection from "@/components/scroll-to-section"

const services = [
  {
    id: 1,
    title: "Landscape Design & Irrigation",
    description:
      "Professional landscape design with integrated irrigation systems for beautiful, water-efficient gardens.",
    features: [
      "Custom landscape design",
      "Smart irrigation installation",
      "Water-efficient planning",
      "Garden feature integration",
      "Seasonal planting schemes",
    ],
    price: "Custom Quote",
    popular: true,
  },
  {
    id: 2,
    title: "Drip Irrigation & Automation",
    description:
      "Precision water delivery systems with smart automation for optimal plant health and water conservation.",
    features: [
      "Water-saving drip systems",
      "Smart controllers & sensors",
      "Mobile app monitoring",
      "Weather-responsive adjustments",
      "Professional installation",
    ],
    price: "From ₹7,999",
    popular: false,
  },
  {
    id: 3,
    title: "Lawn Laying & Maintenance",
    description: "Complete lawn installation and ongoing maintenance services to keep your grass lush and healthy.",
    features: [
      "Premium grass varieties",
      "Soil preparation & grading",
      "Regular mowing & edging",
      "Fertilization programs",
      "Weed & pest control",
    ],
    price: "From ₹12,000",
    popular: false,
  },
  {
    id: 4,
    title: "Stone Laying",
    description:
      "Expert installation of stone pathways, patios, and decorative elements to enhance your outdoor spaces.",
    features: [
      "Natural & engineered stone options",
      "Custom pattern designs",
      "Drainage solutions",
      "Sealing & maintenance",
      "Integrated lighting options",
    ],
    price: "Custom Quote",
    popular: false,
  },
  {
    id: 5,
    title: "Rooftop Garden Design",
    description:
      "Transform your rooftop into a beautiful, functional garden space with our specialized design services.",
    features: [
      "Structural assessment",
      "Lightweight planting solutions",
      "Water-efficient irrigation",
      "Weather-resistant materials",
      "Maintenance programs",
    ],
    price: "Custom Quote",
    popular: false,
  },
  {
    id: 6,
    title: "Garden Automation & Maintenance",
    description:
      "Comprehensive garden maintenance with smart automation to keep your outdoor spaces beautiful year-round.",
    features: [
      "Scheduled maintenance visits",
      "Seasonal planting & pruning",
      "Automated irrigation management",
      "Pest & disease control",
      "Garden feature upkeep",
    ],
    price: "From ₹5,999/month",
    popular: false,
  },
]

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
            service.popular ? "gradient-border" : "border border-transparent"
          }`}
        >
          {service.popular && (
            <div className="bg-gradient-blue-green text-white text-center py-2 font-medium">Most Popular</div>
          )}

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gradient mb-3">{service.title}</h3>
            <p className="text-gray-700 mb-6">{service.description}</p>

            <div className="mb-6">
              <p className="text-2xl font-bold text-gradient">{service.price}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-gradient-blue-green rounded-full p-1 mr-2 flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="default" className="w-full button-modern">
              <ScrollToSection targetId="contact">Enquire Now</ScrollToSection>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
