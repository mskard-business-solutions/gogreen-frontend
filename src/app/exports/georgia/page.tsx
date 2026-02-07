import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Georgia | Vidhi Enterprises",
  keywords: "irrigation Georgia, vineyard irrigation Georgia, orchard irrigation Georgia",
  description: "Vidhi Enterprises exports precision drip systems, foggers, sprinklers and filtration units for Georgia's vineyards, orchards and greenhouses.",
};

export default function GeorgiaPage() {
  return (
    <CountryPageLayout
      countryName="Georgia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Georgia.png"
      welcomeMessage="Welcome to our Georgia irrigation solutions page."
      greeting="გამარჯობა! (Gamarjoba! Hello!)"
      introduction={[
        "Vidhi Enterprises exports precision irrigation systems to Georgia, supporting vineyards, orchards, vegetable growers, and modern greenhouse farming.",
        "Georgia’s growing wine industry relies heavily on high-efficiency irrigation systems.",
      ]}
      marketInsights={[
        "Georgian vineyards require pressure-compensated drippers for consistent flow across long rows.",
        "Demand is rising for greenhouse foggers and filtration systems.",
      ]}
      products={[
        "Precision drip lines",
        "PC orchard drippers",
        "Micro sprinklers",
        "Greenhouse foggers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Vineyards",
        "Fruit orchards",
        "Greenhouses",
        "Horticulture",
      ]}
      whyChooseUs={[
        "Ideal for precision agriculture",
        "Long-lasting and clog-resistant drippers",
        "Reliable export supply for Eastern Europe",
      ]}
    />
  );
}
