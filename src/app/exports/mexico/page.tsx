import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Mexico | Vidhi Enterprises",
  keywords: "irrigation Mexico, drip irrigation Mexico, orchard irrigation Mexico",
  description:
    "Vidhi Enterprises exports drip systems, orchard drippers, sprinklers and filters for Mexico’s fruit, vegetable and plantation farms.",
};

export default function MexicoPage() {
  return (
    <CountryPageLayout
      countryName="Mexico"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Mexico.png"
      welcomeMessage="Welcome to our Mexico irrigation solutions page."
      greeting="¡Hola! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-quality irrigation systems to Mexico’s large agricultural sector, supporting fruit orchards, vegetable farms, and commercial plantations.",
        "Due to varying climates—from arid northern regions to tropical southern areas—precision irrigation plays a crucial role in improving crop yields.",
      ]}
      marketInsights={[
        "Avocado and citrus orchards in Mexico rely heavily on pressure-compensated drippers.",
        "Demand for filtration systems is increasing due to mixed water sources, including wells and surface water.",
      ]}
      products={[
        "Inline drip lines",
        "PC & Non-PC drippers",
        "Mini & micro sprinklers",
        "Filtration units (disc & screen)",
        "HDPE pipes & fittings",
      ]}
      industries={[
        "Fruit orchards",
        "Vegetable farms",
        "Greenhouses",
        "Commercial plantations",
      ]}
      whyChooseUs={[
        "Durable systems suitable for varied climates",
        "Efficient water-saving technologies",
        "Trusted exporter to Latin American markets",
      ]}
    />
  );
}
