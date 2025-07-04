import SectionTitle from "@/components/section-title"
import { Button } from "@/components/ui/button"
import ScrollToSection from "@/components/scroll-to-section"
import Gallery from "@/components/gallery"
import NewsSection from "@/components/news-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import DownloadSection from "@/components/download-section"
import ServicesSection from "@/components/services-section"
import ImageCarousel from "@/components/image-carousel"
import LandscapeDesignSection from "@/components/landscape-design-section"
import DripIrrigationSection from "@/components/drip-irrigation-section"
import LawnMaintenanceSection from "@/components/lawn-maintenance-section"
import StoneLayingSection from "@/components/stone-laying-section"
import RooftopGardenSection from "@/components/rooftop-garden-section"
import GardenAutomationSection from "@/components/garden-automation-section"
import {
  Info,
  Flower,
  Droplet,
  Scissors,
  Hammer,
  Building,
  Settings,
  ImageIcon,
  Newspaper,
  Download,
  Wrench,
  Phone,
} from "lucide-react"
import {
  OrganizationStructuredData,
  ProductStructuredData,
  FAQStructuredData,
  LocalBusinessStructuredData,
} from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <OrganizationStructuredData />
      <ProductStructuredData />
      <FAQStructuredData />
      <LocalBusinessStructuredData />

      <div className="min-h-screen">
        {/* Hero Section with Carousel */}
        <section id="home" className="relative w-full" aria-label="Home">
          <ImageCarousel />
          <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
            <Button asChild className="button-modern text-base px-8 py-6">
              <ScrollToSection targetId="landscape-design">Explore Our Services</ScrollToSection>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="gradient-section w-full py-20" aria-label="About Ufarms">
          <div className="section-content">
            <SectionTitle title="About Ufarms" subtitle="Professional garden and landscape solutions" icon={Info} />
            <AboutSection />
          </div>
        </section>

        {/* Landscape Design Section */}
        <section id="landscape-design" className="w-full py-20" aria-label="Landscape Design & Irrigation">
          <div className="section-content">
            <SectionTitle
              title="Landscape Design & Irrigation"
              subtitle="Beautiful, water-efficient garden designs with integrated irrigation"
              icon={Flower}
            />
            <LandscapeDesignSection />
          </div>
        </section>

        {/* Drip Irrigation Section */}
        <section
          id="drip-irrigation"
          className="gradient-section w-full py-20"
          aria-label="Drip Irrigation & Automation"
        >
          <div className="section-content">
            <SectionTitle
              title="Drip Irrigation & Automation"
              subtitle="Water-efficient systems with smart technology"
              icon={Droplet}
            />
            <DripIrrigationSection />
          </div>
        </section>

        {/* Lawn Maintenance Section */}
        <section id="lawn-maintenance" className="w-full py-20" aria-label="Lawn Laying & Maintenance">
          <div className="section-content">
            <SectionTitle
              title="Lawn Laying & Maintenance"
              subtitle="Premium lawn installation and professional care"
              icon={Scissors}
            />
            <LawnMaintenanceSection />
          </div>
        </section>

        {/* Stone Laying Section */}
        <section id="stone-laying" className="gradient-section w-full py-20" aria-label="Stone Laying">
          <div className="section-content">
            <SectionTitle
              title="Stone Laying & Hardscaping"
              subtitle="Beautiful pathways, patios, and decorative elements"
              icon={Hammer}
            />
            <StoneLayingSection />
          </div>
        </section>

        {/* Rooftop Garden Section */}
        <section id="rooftop-garden" className="w-full py-20" aria-label="Rooftop Garden Design">
          <div className="section-content">
            <SectionTitle
              title="Rooftop Garden Design"
              subtitle="Transform your rooftop into a beautiful garden oasis"
              icon={Building}
            />
            <RooftopGardenSection />
          </div>
        </section>

        {/* Garden Automation Section */}
        <section
          id="garden-automation"
          className="gradient-section w-full py-20"
          aria-label="Garden Automation & Maintenance"
        >
          <div className="section-content">
            <SectionTitle
              title="Garden Automation & Maintenance"
              subtitle="Smart technology and professional care for beautiful gardens"
              icon={Settings}
            />
            <GardenAutomationSection />
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="w-full py-20" aria-label="Our Services">
          <div className="section-content">
            <SectionTitle title="Our Services" subtitle="Professional garden and landscape solutions" icon={Wrench} />
            <ServicesSection />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="gradient-section w-full py-20" aria-label="Project Gallery">
          <div className="section-content">
            <SectionTitle title="Project Gallery" subtitle="See our garden and landscape projects" icon={ImageIcon} />
            <Gallery />
          </div>
        </section>

        {/* News Section 
        <section id="news" className="w-full py-20" aria-label="Latest News">
          <div className="section-content">
            <SectionTitle title="Latest News" subtitle="Stay updated with Ufarms" icon={Newspaper} />
            <NewsSection />
          </div>
        </section>*/}

        {/* Download Section 
        <section id="download" className="gradient-section w-full py-20" aria-label="Downloads">
          <div className="section-content">
            <SectionTitle title="Downloads" subtitle="Access our resources and mobile app" icon={Download} />
            <DownloadSection />
          </div>
        </section>*/}

        {/* Contact Section */}
        <section id="contact" className="w-full py-20" aria-label="Contact Us">
          <div className="section-content">
            <SectionTitle title="Contact Us" subtitle="Get in touch with our team" icon={Phone} />
            <ContactSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-green-teal text-white py-12 px-4 w-full" aria-label="Footer">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Ufarms.io Agritech Pvt Ltd</h3>

              <div className="mt-4">
                <p className="text-gray-100">
                  <span className="font-medium">Address:</span> Marangaden Puthussery Building, CIAL City 130, Angamaly,India 683572
                </p>
                <p className="text-gray-100">
                  <span className="font-medium">Email:</span> info@ufarmsagritech.in
                </p>
                <p className="text-gray-100">
                  <span className="font-medium">Phone:</span> +91 6238065959
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollToSection targetId="landscape-design" className="text-gray-100 hover:text-white">
                    Landscape Design & Irrigation
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection targetId="drip-irrigation" className="text-gray-100 hover:text-white">
                    Drip Irrigation & Automation
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection targetId="lawn-maintenance" className="text-gray-100 hover:text-white">
                    Lawn Laying & Maintenance
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection targetId="stone-laying" className="text-gray-100 hover:text-white">
                    Stone Laying
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection targetId="rooftop-garden" className="text-gray-100 hover:text-white">
                    Rooftop Garden Design
                  </ScrollToSection>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollToSection targetId="about" className="text-gray-100 hover:text-white">
                    About Us
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection targetId="gallery" className="text-gray-100 hover:text-white">
                    Gallery
                  </ScrollToSection>
                </li>

                <li>
                  <ScrollToSection targetId="contact" className="text-gray-100 hover:text-white">
                    Contact
                  </ScrollToSection>
                </li>
              </ul>
            </div>

          </div>
        </footer>
      </div>
    </>
  )
}
