import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Uganda | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip kits, micro sprinklers, filters and HDPE pipes for Uganda’s farmers and cooperatives.",
  keywords: "irrigation Uganda, drip Uganda, micro irrigation Uganda",
};

export default function UgandaPage() {
  return (
    <CountryPageLayout
      countryName="Uganda"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Uganda.png"
      welcomeMessage="Welcome to our Uganda irrigation solutions page."
      greeting="Oli otya! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies micro and drip irrigation systems to Uganda’s vegetable growers, fruit farms, and agricultural cooperatives.",
        "Efficient irrigation improves farmer productivity despite inconsistent rainfall.",
      ]}
      marketInsights={[
        "UGX-funded NGO projects often use drip kits.",
        "Small farms rely heavily on low-pressure systems.",
      ]}
      products={[
        "Drip lines",
        "Drip kits",
        "Micro sprinklers",
        "Screen filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable farmers",
        "Commercial growers",
        "Cooperative farms",
      ]}
      whyChooseUs={[
        "Affordable systems",
        "Easy installation",
        "Reliable East Africa logistics",
      ]}
    />
  );
}
