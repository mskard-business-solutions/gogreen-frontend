import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ProductGrid from "@/components/ProductGrid";
import GlobalPresenceMap from "@/components/GlobalPresenceMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidhi Enterprises - Leading Drip Irrigation & Sprinkler System Manufacturer | ISO Certified",
  description: "Vidhi Enterprises: Premier manufacturer of drip irrigation systems, sprinklers, HDPE pipes, filters & micro-irrigation since 1983. Serving 50+ countries with ISO-certified quality products. Trusted by farmers worldwide.",
  keywords: [
    "drip irrigation manufacturer",
    "sprinkler irrigation systems",
    "HDPE pipes manufacturer India",
    "micro irrigation solutions",
    "drip irrigation systems exporter",
    "precision irrigation equipment",
    "agricultural irrigation manufacturer",
    "inline drippers supplier",
    "online emitters manufacturer",
    "irrigation filters India",
    "fertigation equipment",
    "drip lateral pipes",
    "brass sprinklers manufacturer",
    "plastic sprinklers supplier",
    "rain guns manufacturer",
    "irrigation valves India",
    "greenhouse irrigation systems",
    "landscape irrigation solutions",
    "water management systems",
    "ISO certified irrigation company"
  ],
  authors: [{ name: "Vidhi Enterprises" }],
  creator: "Vidhi Enterprises",
  publisher: "Vidhi Enterprises",
  openGraph: {
    title: "Vidhi Enterprises - ISO Certified Drip Irrigation & Sprinkler Manufacturer Since 1983",
    description: "Leading manufacturer & exporter of drip irrigation systems, sprinklers, HDPE pipes & precision irrigation products. Trusted across 50+ countries since 1983.",
    url: "https://vidhienterprises.com",
    siteName: "Vidhi Enterprises",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhi Enterprises - Drip Irrigation & Sprinkler Systems Manufacturer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhi Enterprises - Drip Irrigation Manufacturer Since 1983",
    description: "ISO-certified manufacturer of drip irrigation, sprinklers, HDPE pipes & micro-irrigation solutions serving global agriculture.",
    images: ["/og-home.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://vidhienterprises.com"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};

export default function Home() {
  // Structured Data for Organization and Website
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vidhi Enterprises",
    "alternateName": "Vidhi Irrigation",
    "description": "Leading manufacturer and exporter of drip irrigation systems, sprinklers, HDPE pipes, and precision irrigation solutions since 1983",
    "foundingDate": "1983",
    "url": "https://vidhienterprises.com",
    "logo": "https://vidhienterprises.com/logo.png",
    "image": "https://vidhienterprises.com/og-home.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English", "Hindi"]
    }],
    "sameAs": [
      "https://www.linkedin.com/company/vidhi-enterprises",
      "https://www.facebook.com/vidhienterprises"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Oman"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "Country",
        "name": "Tanzania"
      },
      {
        "@type": "Country",
        "name": "Nepal"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Irrigation Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Drip Irrigation Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sprinkler Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "HDPE Pipes and Fittings"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vidhi Enterprises",
    "url": "https://vidhienterprises.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vidhienterprises.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
        <Navbar />
      <HeroCarousel />
      <FeatureCards />
      <AboutSection />
      <StatsSection />
      
      {/* YouTube Videos Section */}
      <section className="py-20 bg-white" aria-labelledby="company-videos">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold uppercase tracking-wider mb-2">Watch Our Story</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 id="company-videos" className="text-4xl lg:text-5xl font-bold text-gray-900">
              Latest Videos from Vidhi Enterprises
            </h2>
          </div>
          
          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Video Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_1?rel=0&modestbranding=1"
                  title="Latest Product Innovation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Product Innovation</h3>
                <p className="text-gray-600 text-sm">Discover our newest irrigation solutions</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_2?rel=0&modestbranding=1"
                  title="Customer Success Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Success Story</h3>
                <p className="text-gray-600 text-sm">See how we helped farmers succeed</p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_3?rel=0&modestbranding=1"
                  title="Manufacturing Excellence"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Excellence</h3>
                <p className="text-gray-600 text-sm">Behind the scenes at our facility</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@vidhi_enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-secondary transition shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-youtube text-2xl"></i>
              Visit Our YouTube Channel for More Videos
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section - Integrated into About/Features or added here */}
      <section className="py-20 bg-whitesmoke" aria-labelledby="why-choose-us">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <p className="text-primary font-bold text-xl mb-4">Why Choose Vidhi Enterprises!</p>
              <h2 id="why-choose-us" className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Leading ISO-Certified Irrigation Manufacturer - Trusted Since 1983
              </h2>
              <p className="text-secondary text-lg font-bold mb-8">
                Every <strong>drip irrigation system</strong>, <strong>sprinkler</strong>, and <strong>HDPE pipe</strong> undergoes rigorous quality checks and is manufactured to meet ISO and international export standards, 
                ensuring long-lasting performance trusted by farmers, distributors, and importers across 50+ countries worldwide.
              </p>
              <button className="btn-primary-custom btn-ripple text-white py-4 px-10 rounded font-bold shadow-lg transition" aria-label="Explore more about Vidhi Enterprises irrigation products">
                Explore More
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-check text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900">100% Satisfaction</h4>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center translate-y-0 md:translate-y-8">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-users text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Dedicated Team</h4>
              </div>
              
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center flex flex-col items-center col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
                <div className="w-20 h-20 bg-whitesmoke rounded-full flex items-center justify-center mb-6">
                  <i className="fa fa-tools text-primary text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Modern Equipment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
      <GlobalPresenceMap />
      <ContactForm />
      <Footer />
    </main>
    </>
  );
}