import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function SouthAfricaPage() {
  return (
    <CountryPageLayout
      countryName="South Africa"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/South Africa.png"
      welcomeMessage="Welcome to our South Africa irrigation solutions page."
      greeting="Hello!"
      introduction={[
        "Vidhi Enterprises supplies premium-quality irrigation systems to South Africa’s agricultural sector, including vineyards, orchards, vegetable farms, and nurseries.",
        "South Africa’s diverse climate zones require irrigation systems that perform reliably in both temperate and semi-arid conditions.",
      ]}
      marketInsights={[
        "Vineyards in Western Cape demand precision drip lines.",
        "Commercial vegetable farming relies on mini sprinklers and strong filtration.",
      ]}
      products={[
        "Vineyard drip systems",
        "Orchard drippers",
        "Mini sprinklers",
        "Foggers",
        "Filtration systems",
        "HDPE pipelines",
      ]}
      industries={[
        "Vineyards",
        "Orchards",
        "Vegetable growers",
        "Commercial farms",
      ]}
      whyChooseUs={[
        "High durability and clog resistance",
        "Strong logistics for Southern Africa",
        "Reliable systems for high-value crops",
      ]}
    />
  );
}
