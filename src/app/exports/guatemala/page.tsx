import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Guatemala | Vidhi Enterprises",
  keywords: "irrigation Guatemala, coffee irrigation Guatemala, drip irrigation Guatemala",
  description: "Vidhi Enterprises exports drip systems, sprinklers, filters and HDPE pipes for Guatemala's coffee, vegetable and orchard farmers.",
};

export default function GuatemalaPage() {
  return (
    <CountryPageLayout
      countryName="Guatemala"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Guatemala.png"
      welcomeMessage="Welcome to our Guatemala irrigation solutions page."
      greeting="¡Hola! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-quality irrigation systems to Guatemala's agriculture sector, supporting vegetable farms, coffee plantations, and fruit orchards.",
        "Farmers in Guatemala rely on micro and drip irrigation to maintain crop productivity across varying terrain, from highland farms to lowland plantations.",
      ]}
      marketInsights={[
        "Coffee-growing regions increasingly use drip irrigation to stabilize yields.",
        "Water-saving irrigation is essential due to irregular rainfall patterns.",
      ]}
      products={[
        "Inline drip lines",
        "Online drippers",
        "Mini & micro sprinklers",
        "Filtration systems",
        "HDPE pipes & fittings",
      ]}
      industries={[
        "Coffee plantations",
        "Vegetable farming",
        "Fruit orchards",
        "Smallholder agriculture",
      ]}
      whyChooseUs={[
        "Durable systems for mixed terrains",
        "Strong supply support for Central America",
        "Efficient irrigation for high-value crops",
      ]}
    />
  );
}
