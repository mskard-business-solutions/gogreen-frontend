import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Seychelles | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip lines, foggers, sprinklers and filters for Seychelles’ resorts, nurseries and landscaping.",
  keywords: "irrigation Seychelles, resort irrigation Seychelles, landscaping irrigation Seychelles",
};

export default function SeychellesPage() {
  return (
    <CountryPageLayout
      countryName="Seychelles"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Seychelles.png"
      welcomeMessage="Welcome to our Seychelles irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies coastal-resistant irrigation systems to Seychelles, supporting resorts, landscaping projects, and local agriculture.",
        "As a tropical island nation, Seychelles requires rust-resistant and UV-stable irrigation materials.",
      ]}
      marketInsights={[
        "Resorts frequently use micro sprinklers and foggers for landscaping.",
        "Demand for compact filtration systems is rising.",
      ]}
      products={[
        "Drip lines",
        "Mini sprinklers",
        "Foggers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Resorts",
        "Landscaping",
        "Nurseries",
      ]}
      whyChooseUs={[
        "Coastal-resistant materials",
        "Durable and long-lasting systems",
        "Reliable shipment support for island nations",
      ]}
    />
  );
}
