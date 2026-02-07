import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions The Gambia | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip kits, micro sprinklers and filtration units to The Gambia’s farms, NGOs and community irrigation projects.",
  keywords: "irrigation Gambia, drip irrigation Gambia, micro irrigation Gambia",
};

export default function Gambia() {
  return (
    <CountryPageLayout
      countryName="The Gambia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Gambia.png"
      welcomeMessage="Welcome to our Gambia irrigation solutions page."
      greeting="Nanga def! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies affordable micro and drip irrigation systems to The Gambia’s farmers, community cooperatives, and NGO projects.",
        "Small-scale irrigation is essential for improving food security and supporting horticulture growth.",
      ]}
      marketInsights={[
        "NGOs often use family drip kits for community gardens.",
        "Demand is high for easy-to-install, low-pressure irrigation systems.",
      ]}
      products={[
        "Drip kits",
        "Micro sprinklers",
        "Poly tubes & fittings",
        "Basic filters",
        "HDPE pipes",
      ]}
      industries={[
        "Smallholder farming",
        "Community gardens",
        "Agricultural NGOs",
      ]}
      whyChooseUs={[
        "Budget-friendly irrigation systems",
        "Easy setup in rural villages",
        "Reliable supplier for West Africa",
      ]}
    />
  );
}

