import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Thailand | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip systems, drippers, foggers and filters for Thailand’s fruit, vegetable and greenhouse farms.",
  keywords: "irrigation Thailand, drip Thailand, orchard irrigation Thailand",
};

export default function ThailandPage() {
  return (
    <CountryPageLayout
      countryName="Thailand"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Thailand.png"
      welcomeMessage="Welcome to our Thailand irrigation solutions page."
      greeting="สวัสดี! (Sawasdee! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies efficient irrigation systems suitable for Thailand’s tropical agriculture, including fruit orchards, rice fields, and vegetable farms.",
        "Thai farmers rely heavily on micro-irrigation technologies to improve yield and reduce water usage.",
      ]}
      marketInsights={[
        "Fruit farms prefer pressure-compensated drippers.",
        "Greenhouses increasingly use foggers and mini sprinklers.",
      ]}
      products={[
        "Drip lines",
        "PC drippers",
        "Mini sprinklers",
        "Foggers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Fruit orchards",
        "Vegetable farms",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Durable systems for high humidity",
        "Affordable solutions",
        "Trusted exporter for Southeast Asia",
      ]}
    />
  );
}
