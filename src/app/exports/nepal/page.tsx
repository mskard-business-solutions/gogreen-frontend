import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Nepal | Vidhi Enterprises",
  keywords: "irrigation Nepal, drip irrigation Nepal, terrace farming irrigation Nepal",
  description:
    "Vidhi Enterprises exports drip kits, drippers, sprinklers and filters suitable for Nepal’s terraced farms and smallholder agriculture.",
};

export default function NepalPage() {
  return (
    <CountryPageLayout
      countryName="Nepal"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Nepal.png"
      welcomeMessage="Welcome to our Nepal irrigation solutions page."
      greeting="नमस्ते! (Namaste! Hello!)"
      introduction={[
        "Vidhi Enterprises exports efficient drip and micro-irrigation systems for Nepal’s terraced farms, smallholder farmers, and orchards.",
        "Nepal’s hilly terrain benefits greatly from irrigation systems designed for low-pressure water flow.",
      ]}
      marketInsights={[
        "Terrace farms require lightweight irrigation materials.",
        "Fruit orchards increasingly adopt drip irrigation for higher yields.",
      ]}
      products={[
        "Drip kits",
        "Online drippers",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Terrace farming",
        "Vegetable growers",
        "Fruit orchards",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Low-pressure systems ideal for hills",
        "Affordable irrigation solutions",
        "Trusted exporter for South Asian agriculture",
      ]}
    />
  );
}
