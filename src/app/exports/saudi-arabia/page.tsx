import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Saudi Arabia | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports PC drippers, sprinklers, filters and HDPE lines for Saudi Arabia’s commercial farms and landscaping sectors.",
  keywords: "irrigation Saudi Arabia, drip irrigation KSA, HDPE pipes Saudi Arabia",
};

export default function SaudiArabia() {
  return (
    <CountryPageLayout
      countryName="Saudi Arabia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/SaudiArabia.png"
      welcomeMessage="Welcome to our Saudi Arabia irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-quality irrigation systems suitable for Saudi Arabia's extreme desert climate, supporting farms, landscaping contractors, and large-scale agricultural projects.",
        "Water conservation is a priority in Saudi Arabia, making advanced irrigation solutions essential.",
      ]}
      marketInsights={[
        "PC drippers and HDPE pipelines are widely used in modern farms.",
        "Government agricultural projects demand reliable filtration systems.",
      ]}
      products={[
        "Online & PC drippers",
        "Drip laterals",
        "Mini sprinklers",
        "Impact sprinklers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Large-scale farming",
        "Landscaping",
        "Greenhouses",
        "Orchards",
      ]}
      whyChooseUs={[
        "Exceptional UV and heat resistance",
        "Compatibility with Saudi agriculture",
        "Strong GCC export capability",
      ]}
    />
  );
}

