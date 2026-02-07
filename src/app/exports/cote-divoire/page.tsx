import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Côte d'Ivoire | Vidhi Enterprises",
  keywords: "irrigation Côte d'Ivoire, drip Ivory Coast, irrigation West Africa",
  description: "Vidhi Enterprises exports drip systems, micro sprinklers, filters and HDPE fittings for Côte d'Ivoire's cocoa, fruit and vegetable farming sectors.",
};

export default function CoteDIvoirePage() {
  return (
    <CountryPageLayout
      countryName="Côte d'Ivoire"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Cote-dIvoire.png"
      welcomeMessage="Welcome to our Côte d'Ivoire irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies reliable drip and sprinkler irrigation systems to Côte d'Ivoire's expanding agricultural sector, including cocoa farms, vegetable growers, and fruit orchards.",
        "Farmers increasingly depend on water-efficient systems to improve productivity in both small farms and large plantations.",
      ]}
      marketInsights={[
        "Côte d'Ivoire is one of the world's leading cocoa producers, and irrigation adoption is growing rapidly due to fluctuating rainfall.",
        "Demand is high for durable drip lines and filtration units suited for tropical climates.",
      ]}
      products={[
        "Drip laterals & drippers",
        "Mini & micro sprinklers",
        "Orchard irrigation systems",
        "Filtration units (disc & screen)",
        "HDPE pipes & fittings",
      ]}
      industries={[
        "Cocoa plantations",
        "Vegetable farms",
        "Fruit orchards",
        "Community farming",
      ]}
      whyChooseUs={[
        "High-quality materials suited for tropical humidity",
        "Reliable supply for West African agriculture",
        "Cost-effective irrigation systems for all farm sizes",
        "Strong export logistics for African markets",
      ]}
    />
  );
}
