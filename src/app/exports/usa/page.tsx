import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions USA | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports advanced irrigation systems, drip lines, and filtration units for USA's agriculture, landscaping, and commercial projects.",
  keywords: "irrigation USA, drip irrigation USA, agricultural irrigation USA, landscaping USA",
};

export default function USAPage() {
  return (
    <CountryPageLayout
      countryName="United States"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/UnitedStates.png"
      welcomeMessage="Welcome to our USA irrigation solutions page."
      greeting="Hello!"
      introduction={[
        "Vidhi Enterprises delivers high-performance irrigation systems to the United States, catering to large-scale agriculture, commercial landscaping, and residential projects.",
        "We provide durable, efficient, and water-saving solutions designed to meet the diverse climatic needs of the US market.",
      ]}
      marketInsights={[
        "Precision irrigation is key for maximizing crop yields and water conservation.",
        "Advanced filtration and automation systems are in high demand for modern farming.",
      ]}
      products={[
        "Drip irrigation lines",
        "Micro sprinklers",
        "Filtration systems",
        "HDPE pipes & fittings",
        "Automation valves",
        "Foggers & Misters",
      ]}
      industries={[
        "Agriculture (Corn, Soy, Vineyards)",
        "Commercial Landscaping",
        "Golf Courses",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "High-quality, durable materials",
        "Water-efficient technologies",
        "Cost-effective export solutions",
        "Compliance with international standards",
      ]}
    />
  );
}
