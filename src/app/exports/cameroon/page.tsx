import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Cameroon | Vidhi Enterprises",
  keywords: "irrigation Cameroon, drip irrigation Cameroon, plantation irrigation Cameroon",
  description: "Vidhi Enterprises exports drip systems, sprinklers, filters and HDPE pipes to support Cameroon's farms and plantation agriculture.",
};

export default function CameroonPage() {
  return (
    <CountryPageLayout
      countryName="Cameroon"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Cameroon.png"
      welcomeMessage="Welcome to our Cameroon irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-quality irrigation systems to Cameroon's diverse agricultural sector, supporting vegetable fields, cocoa and coffee plantations, and horticulture farms.",
        "Efficient irrigation helps farmers overcome irregular rainfall and improve yields across different climatic zones.",
      ]}
      marketInsights={[
        "Cameroon's western regions depend heavily on plantation agriculture, increasing demand for sprinklers and durable drip systems.",
        "Filtration units are essential due to water sourced from streams, rivers, and wells.",
      ]}
      products={[
        "Inline & online drippers",
        "Plantation sprinklers",
        "Mini sprinklers",
        "Filtration units",
        "HDPE pipes & PP fittings",
      ]}
      industries={[
        "Cocoa & coffee plantations",
        "Vegetable farms",
        "Horticulture nurseries",
        "Commercial agriculture",
      ]}
      whyChooseUs={[
        "Durable systems for tropical and rainy climates",
        "Reliable efficiency for plantation-scale irrigation",
        "Fast export supply to Central Africa",
      ]}
    />
  );
}
