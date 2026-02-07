import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Niger | Vidhi Enterprises",
  keywords: "irrigation Niger, drip Niger, micro irrigation Niger",
  description:
    "Vidhi Enterprises exports drip kits, micro sprinklers and filtration units for Niger’s farmers and NGO irrigation programs.",
};

export default function NigerPage() {
  return (
    <CountryPageLayout
      countryName="Niger"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Niger.png"
      welcomeMessage="Welcome to our Niger irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies micro and drip irrigation systems to Niger’s farmers, communities, and agricultural development programs.",
        "Niger faces severe water scarcity, making efficient irrigation essential for food production.",
      ]}
      marketInsights={[
        "NGOs commonly distribute family drip kits.",
        "Low-pressure systems are ideal for rural farmers.",
      ]}
      products={[
        "Low-pressure drip kits",
        "Micro sprinklers",
        "Basic filters",
        "HDPE pipes",
      ]}
      industries={[
        "Smallholder farmers",
        "Community gardens",
        "Agricultural NGOs",
      ]}
      whyChooseUs={[
        "Affordable irrigation solutions",
        "Suitable for low-water regions",
        "Reliable export supply across West Africa",
      ]}
    />
  );
}
