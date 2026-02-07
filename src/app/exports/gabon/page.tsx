import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Gabon | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip systems, plantation sprinklers, filters and HDPE pipes for Gabon’s agricultural and horticultural sectors.",
  keywords: "irrigation Gabon, drip irrigation Gabon, plantation irrigation Gabon",
};

export default function Gabon() {
  return (
    <CountryPageLayout
      countryName="Gabon"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Gabon.png"
      welcomeMessage="Welcome to our Gabon irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies durable irrigation equipment to Gabon, supporting the country’s plantations, vegetable farms, and horticulture industries.",
        "Gabon’s mix of tropical rainforests and agricultural zones increases the need for strong, moisture-resistant irrigation systems.",
      ]}
      marketInsights={[
        "Plantation agriculture is expanding in Gabon, boosting demand for sprinklers and efficient drip systems.",
        "Filtration units are important due to diverse water sources.",
      ]}
      products={[
        "Drip irrigation systems",
        "Plantation sprinklers",
        "Mini sprinklers",
        "Filtration systems",
        "HDPE pipes",
      ]}
      industries={[
        "Plantations",
        "Vegetable growers",
        "Nurseries & landscaping",
      ]}
      whyChooseUs={[
        "Reliable performance in humid climates",
        "Long-lasting irrigation materials",
        "Strong export logistics across Central Africa",
      ]}
    />
  );
}

