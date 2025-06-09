"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We will get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000)
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold text-gradient-tri mb-6">Get In Touch</h3>
        <p className="text-gray-700 mb-8">
          Have questions about our irrigation solutions? Fill out the form and our team will get back to you as soon as
          possible.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-blue-green p-3 rounded-full flex-shrink-0 mt-1">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gradient">Address</h4>
              <p className="text-gray-600">Marangaden Puthussery Building, CIAL City 130, Angamaly , India 683572</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gradient-blue-green p-3 rounded-full flex-shrink-0 mt-1">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gradient">Phone</h4>
              <p className="text-gray-600">
                <a href="tel:916238065959" className="hover:text-blue-600 transition-colors">
                  +91 6238065959
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gradient-blue-green p-3 rounded-full flex-shrink-0 mt-1">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gradient">Email</h4>
              <p className="text-gray+-600">
                <a href="mailto:info@ufarms.io" className="hover:text-blue-600 transition-colors">
                  info@ufarmsagritech.in
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gradient-blue-green p-3 rounded-full flex-shrink-0 mt-1">
              <Clock className="h-5 w-5 text-white" />
            </div>
            
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              aria-required="true"
            >
              <option value="">Select a subject</option>
              <option value="sprinkler">Sprinkler Irrigation Systems</option>
              <option value="lawn">Lawn Automation</option>
              <option value="drip">Drip Irrigation for Farms</option>
              <option value="iot">IoT-Enabled Irrigation</option>
              <option value="smart">Smart Farming Solutions</option>
        
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              aria-required="true"
            ></textarea>
          </div>

          <Button type="submit" disabled={isSubmitting} variant="accent" className="w-full button-modern">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {submitMessage && (
            <div className="p-4 bg-green-100 text-green-800 rounded-full" role="alert" aria-live="polite">
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
