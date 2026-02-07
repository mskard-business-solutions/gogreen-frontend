import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Nigeria | Vidhi Enterprises",
  keywords: "irrigation Nigeria, drip Nigeria, HDPE pipes Nigeria",
  description:
    "Vidhi Enterprises exports drip lines, sprinklers, filters and HDPE fittings for Nigeria’s commercial farms and plantations.",
};

export default function NigeriaPage() {
  return (
    <CountryPageLayout
      countryName="Nigeria"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Nigeria.png"
      welcomeMessage="Welcome to our Nigeria irrigation solutions page."
      greeting="Hello!"
      introduction={[
        "Vidhi Enterprises supports Nigeria’s agriculture sector with durable irrigation systems suited for vegetable farming, orchards, and commercial agriculture.",
        "Nigeria’s expanding farming industry requires reliable irrigation solutions to stabilize yields.",
      ]}
      marketInsights={[
        "Major vegetable-growing regions prefer drip irrigation.",
        "Demand is rising for HDPE pipelines due to large-scale farm expansion.",
      ]}
      products={[
        "Drip irrigation systems",
        "Plantation sprinklers",
        "Filtration equipment",
        "HDPE pipes & fittings",
      ]}
      industries={[
        "Commercial farms",
        "Vegetable growers",
        "Orchards",
        "Plantations",
      ]}
      whyChooseUs={[
        "Durable materials for tropical climates",
        "High water efficiency",
        "Reliable exporter for West Africa",
      ]}
    />
  );
}
