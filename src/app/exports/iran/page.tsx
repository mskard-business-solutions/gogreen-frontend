import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Iran | Vidhi Enterprises",
  keywords: "irrigation Iran, orchard irrigation Iran, drip Iran",
  description: "Vidhi Enterprises exports drip systems, impact sprinklers, filters and HDPE lines suited for Iran's arid agriculture and orchards.",
};

export default function IranPage() {
  return (
    <CountryPageLayout
      countryName="Iran"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Iran.png"
      welcomeMessage="Welcome to our Iran irrigation solutions page."
      greeting="سلام! (Salam! Hello!)"
      introduction={[
        "Vidhi Enterprises exports durable irrigation systems to Iran, where water-saving technologies play a major role in modern agriculture.",
        "Iran’s dry climate and large farming areas require efficient systems capable of long-term reliability.",
      ]}
      marketInsights={[
        "Farmers in Iran increasingly adopt pressure-compensated drippers for orchards.",
        "High demand exists for HDPE pipelines used in large-scale irrigation.",
      ]}
      products={[
        "PC & Non‑PC drippers",
        "Drip laterals",
        "Impact sprinklers",
        "Disc & sand filters",
        "HDPE pipes (PE80/100)",
      ]}
      industries={[
        "Orchards",
        "Vegetable farms",
        "Greenhouses",
        "Commercial farms",
      ]}
      whyChooseUs={[
        "Suitable for hot and arid conditions",
        "High-performance filtration options",
        "Reliable bulk export to Iranian ports",
      ]}
    />
  );
}
