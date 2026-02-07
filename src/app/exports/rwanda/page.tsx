import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Rwanda | Vidhi Enterprises",
  keywords: "irrigation Rwanda, drip Rwanda, micro irrigation Rwanda",
  description:
    "Vidhi Enterprises exports drip kits, sprinklers and HDPE pipes for Rwanda’s vegetable, orchard and community farming projects.",
};

export default function RwandaPage() {
  return (
    <CountryPageLayout
      countryName="Rwanda"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Rwanda.png"
      welcomeMessage="Welcome to our Rwanda irrigation solutions page."
      greeting="Muraho! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Rwanda’s growing agriculture by supplying affordable and efficient drip and micro-irrigation systems.",
        "Rwanda’s hilly terrain benefits greatly from precision irrigation systems that conserve water.",
      ]}
      marketInsights={[
        "Vegetable and fruit farmers increasingly adopt drip irrigation.",
        "NGOs support irrigation installations in many rural areas.",
      ]}
      products={[
        "Drip irrigation kits",
        "16mm laterals",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable growers",
        "Fruit orchards",
        "Community farms",
      ]}
      whyChooseUs={[
        "Low-pressure, slope-friendly systems",
        "Affordable for small farms",
        "Trusted exporter for East Africa",
      ]}
    />
  );
}
