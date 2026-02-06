import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function ZambiaPage() {
  return (
    <CountryPageLayout
      countryName="Zambia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Zambia.png"
      welcomeMessage="Welcome to our Zambia irrigation solutions page."
      greeting="Muli bwanji! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies affordable irrigation systems to Zambia’s vegetable growers, orchards, and commercial farms.",
        "Improved irrigation efficiency helps farmers increase yields and reduce water loss.",
      ]}
      marketInsights={[
        "NGOs use drip kits widely.",
        "Commercial farms demand HDPE pipelines.",
      ]}
      products={[
        "Drip laterals",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable farms",
        "Orchards",
        "Commercial agriculture",
      ]}
      whyChooseUs={[
        "Low-cost systems",
        "Durable materials",
        "Trusted African exporter",
      ]}
    />
  );
}
