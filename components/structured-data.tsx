export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ufarms.io",
    url: "https://ufarms.io",
    logo: "https://ufarms.io/logo.png",
    sameAs: [
      "https://facebook.com/ufarmsio",
      "https://twitter.com/ufarmsio",
      "https://instagram.com/ufarmsio",
      "https://linkedin.com/company/ufarmsio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "info@ufarms.io",
      availableLanguage: ["English"],
    },
    description:
      "Ufarms provides advanced sprinkler irrigation systems, lawn automation, IoT-enabled controls, and smart farming solutions.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function ProductStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Smart Irrigation Control System",
    image: "https://ufarms.io/smart-irrigation-system.jpg",
    description:
      "IoT-enabled sprinkler irrigation system with real-time weather data and smart sensors for optimal water usage.",
    brand: {
      "@type": "Brand",
      name: "Ufarms",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "7999",
      highPrice: "24999",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "89",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function FAQStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much water can I save with smart irrigation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our smart irrigation systems can reduce water consumption by up to 50% for landscapes and up to 70% for agricultural applications compared to conventional methods.",
        },
      },
      {
        "@type": "Question",
        name: "Can I control my irrigation system remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our IoT-enabled systems can be controlled from anywhere using our mobile app, allowing you to adjust schedules, monitor water usage, and receive alerts.",
        },
      },
      {
        "@type": "Question",
        name: "What add-ons are available for the irrigation system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer several customizable add-ons including temperature & humidity monitoring, smart lighting control, and garden lights automation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide installation services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide professional installation services for all our irrigation systems, including site assessment, custom system design, and user training.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ufarms.io",
    image: "https://ufarms.io/store-image.jpg",
    telephone: "+1-555-123-4567",
    email: "info@ufarms.io",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Irrigation Way",
      addressLocality: "Farmington",
      addressRegion: "CA",
      postalCode: "94538",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.5485",
      longitude: "-121.9886",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "₹₹₹",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
