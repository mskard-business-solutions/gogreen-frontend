import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Burundi() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Burundi", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Burundi"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Burundi irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-900 text-shadow-sm">
              Bwakeye! (Hello!)
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Introduction</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <div className="space-y-4 text-lg text-green-900 font-bold text-justify">
                  <p>
                    Vidhi Enterprises supplies robust, high-performance irrigation systems to Burundi’s agricultural sector, supporting smallholder farmers in improving productivity for coffee, tea, and food crops.
                  </p>
                  <p>
                    Given Burundi’s hilly terrain and tropical climate, farmers rely on efficient irrigation systems that conserve water and enhance crop yields on terraced lands.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Market Insights */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Market Insights</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <div className="space-y-4 text-lg text-green-900 font-bold text-justify">
                  <p>
                    Agriculture is the backbone of Burundi’s economy, driving demand for affordable and durable irrigation solutions suitable for small-scale farming.
                  </p>
                  <p>
                    Irrigation adoption is increasing to mitigate the effects of climate variability and ensure food security throughout the year.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Drip irrigation kits for small plots</li>
                  <li>• Sprinklers for coffee and tea plantations</li>
                  <li>• Rain guns for larger fields</li>
                  <li>• HDPE pipes and fittings</li>
                  <li>• Filtration systems</li>
                  <li>• Water storage solutions</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Coffee and tea cooperatives</li>
                  <li>• Vegetable and fruit farmers</li>
                  <li>• Rice growers (in marshlands)</li>
                  <li>• Community garden projects</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Affordable solutions tailored for smallholders</li>
                  <li>• Durable equipment suited for hilly terrain</li>
                  <li>• Commitment to improving rural livelihoods</li>
                  <li>• Expertise in tropical agriculture irrigation</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Burundi.png"
                  alt="Burundi Map"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
