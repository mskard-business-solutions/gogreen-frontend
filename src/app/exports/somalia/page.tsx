import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Somalia | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip kits, micro sprinklers and HDPE pipes for Somalia’s farms and community irrigation programs.",
  keywords: "irrigation Somalia, drip Somalia, micro irrigation Somalia",
};

export default function SomaliaPage() {
  return (
    <CountryPageLayout
      countryName="Somalia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Somalia.png"
      welcomeMessage="Welcome to our Somalia irrigation solutions page."
      greeting="Salaan! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies reliable and affordable irrigation systems to Somalia’s farms, community projects, and NGO-led agricultural programs.",
        "Given Somalia’s dry climate, water-efficient micro and drip irrigation systems play a vital role in improving food production.",
      ]}
      marketInsights={[
        "Drip kits are widely used in vegetable farming and community irrigation.",
        "Smallholder farmers prefer easy-to-install, low-pressure irrigation systems.",
      ]}
      products={[
        "Drip kits",
        "16mm laterals",
        "Micro sprinklers",
        "Basic filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable growers",
        "Smallholder farmers",
        "Community projects",
      ]}
      whyChooseUs={[
        "Affordable solutions for rural regions",
        "Low-pressure irrigation compatibility",
        "Reliable exporter for East Africa",
      ]}
    />
  );
}
