import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";

export default function EcoRotatingSprinkler() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Economical Irrigation", href: "/economical" },
    { label: "Eco Rotating Sprinkler", active: true },
  ];

  const features = [
    "Comes with 1/2″ and 3/4″ BSP male threaded inlets for easy installation.",
    "Supports multiple nozzle types, available in various sizes to suit different needs.",
    "Works efficiently within a pressure range of 0.75 kg/cm² to 2 kg/cm².",
    "Made using premium-grade engineering plastic for long-lasting strength.",
    "UV-stabilized and resistant to commonly used agricultural chemicals.",
    "Rotates continuously to ensure complete field coverage without leaving dry spots.",
    "Delivers highly uniform water distribution, even when operated at low pressure.",
    "Equipped with a counterbalance system to minimize vibrations during operation.",
    "Designed for smooth, reliable performance in all irrigation conditions.",
    "Ensures stable working efficiency while maintaining consistent water output.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Eco Rotating Sprinkler"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/eco-head-8.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Economical Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Eco Sprinklers</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Eco-21.png"
                  alt="Eco Rotating Sprinkler"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-green-900 border-b-4 border-secondary pb-4 inline-block leading-tight uppercase">
                Eco Rotating Sprinkler
              </h1>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 max-w-sm">
                  <Image 
                    src="https://d170mw2nhcb1v0.cloudfront.net/img/Model-64.png" 
                    alt="Model Diagram" 
                    width={400} 
                    height={300} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>

              <div className="pt-4 text-center lg:text-left flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                <a 
                  href="/pdf/AM pdf.pdf" 
                  target="_blank" 
                  className="btn-primary-custom btn-ripple text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
                >
                  <i className="fa fa-file-pdf mr-3"></i> View PDF
                </a>
                <ShareButton 
                  title="Eco Rotating Sprinkler" 
                  text="Check out Eco Rotating Sprinkler from GoGreen. Designed for smooth, reliable performance in all irrigation conditions." 
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
