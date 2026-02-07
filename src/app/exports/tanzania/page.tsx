import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Tanzania | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip kits, sprinklers and HDPE fittings for Tanzania’s farms and community agriculture programs.",
  keywords: "irrigation Tanzania, drip Tanzania, micro irrigation Tanzania",
};

export default function TanzaniaPage() {
  return (
    <CountryPageLayout
      countryName="Tanzania"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Tanzania.png"
      welcomeMessage="Welcome to our Tanzania irrigation solutions page."
      greeting="Habari! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Tanzania’s agriculture by supplying reliable drip and micro-irrigation systems for vegetable farms, fruit orchards, and community irrigation projects.",
        "Tanzania’s diverse farming regions benefit greatly from efficient irrigation systems.",
      ]}
      marketInsights={[
        "NGOs widely adopt drip irrigation kits.",
        "Commercial farms prefer mini sprinklers and HDPE pipelines.",
      ]}
      products={[
        "Drip kits",
        "16mm laterals",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable farmers",
        "Fruit orchards",
        "Community projects",
      ]}
      whyChooseUs={[
        "Affordable systems",
        "Durable tropical-weather materials",
        "Reliable African export network",
      ]}
    />
  );
}
