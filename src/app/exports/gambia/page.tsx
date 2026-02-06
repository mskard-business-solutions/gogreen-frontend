import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gambia | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip kits, micro sprinklers and filtration units to The Gambia’s farms, NGOs and community irrigation projects.",
  keywords: "irrigation Gambia, drip irrigation Gambia, micro irrigation Gambia",
};

export default function Gambia() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "The Gambia", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="The Gambia"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Gambia irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-900 text-shadow-sm">
              Nanga def! (Hello!)
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
                    Vidhi Enterprises supplies affordable micro and drip irrigation systems to The Gambia’s farmers, community cooperatives, and NGO projects.
                  </p>
                  <p>
                    Small-scale irrigation is essential for improving food security and supporting horticulture growth.
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
                    NGOs often use family drip kits for community gardens.
                  </p>
                  <p>
                    Demand is high for easy-to-install, low-pressure irrigation systems.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Drip kits</li>
                  <li>• Micro sprinklers</li>
                  <li>• Poly tubes & fittings</li>
                  <li>• Basic filters</li>
                  <li>• HDPE pipes</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Smallholder farming</li>
                  <li>• Community gardens</li>
                  <li>• Agricultural NGOs</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  <li>• Budget-friendly irrigation systems</li>
                  <li>• Easy setup in rural villages</li>
                  <li>• Reliable supplier for West Africa</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Gambia.png"
                  alt="Gambia Map"
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
