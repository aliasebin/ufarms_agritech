import type { LucideIcon } from "lucide-react"

interface SectionTitleProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
}

export default function SectionTitle({ title, subtitle, icon: Icon }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>
  )
}
