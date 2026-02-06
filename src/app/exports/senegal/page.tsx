import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function SenegalPage() {
  return (
    <CountryPageLayout
      countryName="Senegal"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Senegal.png"
      welcomeMessage="Welcome to our Senegal irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies affordable drip and micro-irrigation systems to Senegal’s farmers, vegetable growers, and development programs.",
        "Senegal’s semi-arid climate makes irrigation crucial for improving agricultural productivity.",
      ]}
      marketInsights={[
        "Drip irrigation adoption is increasing in horticulture regions.",
        "NGOs use low-pressure drip kits for community farms.",
      ]}
      products={[
        "Drip kits",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable growers",
        "Community agriculture",
        "Smallholder farmers",
      ]}
      whyChooseUs={[
        "Affordable systems",
        "Easy installation in rural regions",
        "Reliable exporter for West Africa",
      ]}
    />
  );
}
