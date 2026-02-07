import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions New Zealand | Vidhi Enterprises",
  keywords: "irrigation New Zealand, vineyard irrigation NZ, orchard irrigation NZ",
  description:
    "Vidhi Enterprises exports precision drip lines, orchard drippers, foggers and filters for New Zealand’s vineyards, orchards and greenhouses.",
};

export default function NewZealandPage() {
  return (
    <CountryPageLayout
      countryName="New Zealand"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/NewZealand.png"
      welcomeMessage="Welcome to our New Zealand irrigation solutions page."
      greeting="Kia ora! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-efficiency irrigation systems tailored for New Zealand’s dairy farms, orchards, vineyards, and vegetable growers.",
        "New Zealand’s advanced agriculture demands durable, precision-based irrigation systems capable of delivering consistent performance across varying terrains.",
      ]}
      marketInsights={[
        "Vineyards in Marlborough and orchards in Hawke’s Bay increasingly adopt pressure-compensated drippers.",
        "Greenhouses rely heavily on foggers and micro sprinklers for controlled environments.",
      ]}
      products={[
        "Inline vineyard drip lines",
        "PC/Non-PC orchard drippers",
        "Foggers & misters",
        "Filtration systems",
        "HDPE pipes & fittings",
      ]}
      industries={[
        "Vineyards",
        "Orchards",
        "Dairy pasture irrigation",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "High precision systems",
        "Durable materials suited for NZ climates",
        "Reliable export links for Oceania",
      ]}
    />
  );
}
