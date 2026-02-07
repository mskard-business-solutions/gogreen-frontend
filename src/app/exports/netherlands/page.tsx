import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Netherlands | Vidhi Enterprises",
  keywords: "irrigation Netherlands, greenhouse irrigation Netherlands, horticulture irrigation Netherlands",
  description:
    "Vidhi Enterprises exports precision drippers, foggers, sprinklers and filters for greenhouse and horticulture farms in the Netherlands.",
};

export default function NetherlandsPage() {
  return (
    <CountryPageLayout
      countryName="Netherlands"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Netherlands.png"
      welcomeMessage="Welcome to our Netherlands irrigation solutions page."
      greeting="Hallo! (Hello!)"
      introduction={[
        "Vidhi Enterprises provides precision irrigation systems to the Netherlands, serving greenhouses, horticulture farms, and advanced agricultural operations.",
        "The Netherlands is a global leader in greenhouse farming, requiring highly accurate irrigation systems.",
      ]}
      marketInsights={[
        "High-tech greenhouses demand consistent misting and regulated irrigation.",
        "Filtration systems are standard due to recycled water usage.",
      ]}
      products={[
        "Precision drippers",
        "Foggers & misters",
        "Micro sprinklers",
        "Filtration units",
        "HDPE pipelines",
      ]}
      industries={[
        "Greenhouse farming",
        "Horticulture",
        "Hydroponics",
        "Flower cultivation",
      ]}
      whyChooseUs={[
        "High precision irrigation solutions",
        "Clog-resistant drippers for greenhouse use",
        "Reliable supply for European distributors",
      ]}
    />
  );
}
