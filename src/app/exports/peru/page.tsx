import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function PeruPage() {
  return (
    <CountryPageLayout
      countryName="Peru"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Peru.png"
      welcomeMessage="Welcome to our Peru irrigation solutions page."
      greeting="¡Hola! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies advanced irrigation systems to Peru’s thriving agriculture sector, supporting vineyards, fruit plantations, and vegetable farms.",
        "Peru’s coastal desert farming relies heavily on precision irrigation to maximize productivity.",
      ]}
      marketInsights={[
        "Export-oriented grape and blueberry farms prefer pressure-compensated drippers.",
        "Sand media and disc filters are essential due to saline water sources.",
      ]}
      products={[
        "Vineyard drip lines",
        "Orchard drippers",
        "Mini sprinklers",
        "Sand & disc filters",
        "HDPE pipes",
      ]}
      industries={[
        "Fruit plantations",
        "Vineyards",
        "Greenhouses",
        "Vegetable growers",
      ]}
      whyChooseUs={[
        "High accuracy irrigation",
        "Durable systems for desert farming",
        "Reliable export supply for South America",
      ]}
    />
  );
}
