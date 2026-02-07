import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Lebanon | Vidhi Enterprises",
  description: "Vidhi Enterprises supplies precision drippers, sprinklers, filters and HDPE pipes for Lebanon’s orchards, vineyards and greenhouses.",
  keywords: "irrigation Lebanon, orchard irrigation Lebanon, vineyard irrigation Lebanon",
};

export default function Lebanon() {
  return (
    <CountryPageLayout
      countryName="Lebanon"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Lebanon.png"
      welcomeMessage="Welcome to our Lebanon irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-efficiency irrigation solutions to Lebanon’s orchards, vineyards, nurseries, and vegetable farms.",
        "Lebanon’s mountainous terrain benefits greatly from precision irrigation systems.",
      ]}
      marketInsights={[
        "Fruit orchards prefer pressure-compensated drippers for uniform water flow.",
        "Greenhouses along the coast increasingly use foggers and filtration.",
      ]}
      products={[
        "PC orchard drippers",
        "Inline drip lines",
        "Mini & micro sprinklers",
        "Filtration systems",
        "HDPE pipes",
      ]}
      industries={[
        "Fruit orchards",
        "Vineyards",
        "Greenhouses",
        "Vegetable farming",
      ]}
      whyChooseUs={[
        "Precision irrigation for slope farms",
        "Long-lasting materials",
        "Reliable supplier for Middle Eastern agriculture",
      ]}
    />
  );
}
