import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions USA | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports precision drippers, sprinklers, foggers and HDPE pipelines to agricultural and landscape markets in the United States.",
  keywords: "irrigation USA, greenhouse irrigation USA, precision irrigation USA",
};

export default function USAPage() {
  return (
    <CountryPageLayout
      countryName="United States"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/UnitedStates.png"
      welcomeMessage="Welcome to our United States irrigation solutions page."
      greeting="Hello!"
      introduction={[
        "Vidhi Enterprises supplies premium-grade irrigation systems to the United States, supporting landscaping contractors, greenhouse growers, and agricultural distributors.",
        "American farms and commercial projects rely on high-precision, efficient irrigation technologies.",
      ]}
      marketInsights={[
        "Greenhouses prefer foggers and precision drippers.",
        "Large farms use HDPE pipelines extensively.",
      ]}
      products={[
        "PC drippers",
        "Inline drip lines",
        "Foggers",
        "Mini sprinklers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Greenhouses",
        "Orchards",
        "Vegetable farms",
      ]}
      whyChooseUs={[
        "High-quality systems",
        "Precision agriculture capability",
        "Strong export infrastructure",
      ]}
    />
  );
}
