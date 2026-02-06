import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function GhanaPage() {
  return (
    <CountryPageLayout
      countryName="Ghana"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Ghana.png"
      welcomeMessage="Welcome to our Ghana irrigation solutions page."
      greeting="Akwaaba! (Welcome!)"
      introduction={[
        "Vidhi Enterprises supports Ghana’s agricultural growth by supplying efficient drip and micro-irrigation systems for vegetables, fruits, and community irrigation schemes.",
        "Small and medium farms benefit from water-saving technologies that increase harvest yields.",
      ]}
      marketInsights={[
        "Ghana’s horticulture sector is expanding, encouraging adoption of drip irrigation.",
        "Government-backed agriculture programs drive demand for affordable systems.",
      ]}
      products={[
        "Drip irrigation kits",
        "Drip laterals",
        "Micro sprinklers",
        "Screen filters",
        "HDPE pipes",
      ]}
      industries={[
        "Smallholder vegetable farmers",
        "Community irrigation programs",
        "Fruit growers",
      ]}
      whyChooseUs={[
        "Affordable systems for emerging farms",
        "Durable materials for tropical weather",
        "Reliable supply for West Africa",
      ]}
    />
  );
}
