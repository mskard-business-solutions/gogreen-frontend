import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Bahrain() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Bahrain", active: true },
  ];

  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader
        title="Bahrain"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Bahrain irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-900 text-shadow-sm">
              Assalamu Alaikum! (Hello!)
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
                    Vidhi Enterprises supports Bahrain’s agriculture by supplying easy-to-install drip systems that help farmers improve productivity across various farming environments.
                  </p>
                  <p>
                    Bahrain’s agricultural regions benefit from micro-irrigation solutions, which are highly suitable for improving vegetable and fruit cultivation in arid climates.
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
                    Farmers in the region prefer efficient irrigation materials that are easy to manage and help conserve water in desert environments.
                  </p>
                  <p>
                    Micro-irrigation adoption is rising in modern greenhouse farming and hydroponic projects.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Low-pressure drip laterals (16mm)</li>
                  <li>• Online drippers (2–4 LPH)</li>
                  <li>• Microtubes & connectors</li>
                  <li>• Mini sprinklers for nurseries</li>
                  <li>• Compact screen filtration units</li>
                  <li>• Small-diameter HDPE coils</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Greenhouse vegetable growers</li>
                  <li>• Date palm plantations</li>
                  <li>• Fruit orchards</li>
                  <li>• Urban agriculture projects</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Affordable, water-efficient irrigation systems</li>
                  <li>• Easy installation and low maintenance</li>
                  <li>• Durable materials designed for harsh climates</li>
                  <li>• Trusted supplier for agricultural initiatives in the region</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Bahrain.png"
                  alt="Bahrain Map"
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
