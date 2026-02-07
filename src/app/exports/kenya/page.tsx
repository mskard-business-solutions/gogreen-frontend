import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Kenya | Vidhi Enterprises",
  keywords: "irrigation Kenya, drip irrigation Kenya, greenhouse irrigation Kenya",
  description: "Vidhi Enterprises exports drip kits, sprinklers, foggers and HDPE fittings for Kenya's vegetable, flower and fruit farming sectors.",
};

export default function KenyaPage() {
  return (
    <CountryPageLayout
      countryName="Kenya"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Kenya.png"
      welcomeMessage="Welcome to our Kenya irrigation solutions page."
      greeting="Jambo! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Kenya’s growing agricultural sector by supplying drip and micro-irrigation systems for vegetable farming, flower cultivation, and orchards.",
        "Kenya’s climate diversity—from highlands to semi-arid regions—makes efficient irrigation critical for stable production.",
      ]}
      marketInsights={[
        "Kenya is a global leader in floriculture, driving strong demand for greenhouse irrigation.",
        "Smallholder farmers increasingly adopt drip kits to boost vegetable yields.",
      ]}
      products={[
        "Drip irrigation kits",
        "Drip laterals",
        "Micro sprinklers",
        "Foggers & misters",
        "HDPE pipes & fittings",
      ]}
      industries={[
        "Vegetable farming",
        "Floriculture",
        "Fruit orchards",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Affordable solutions for rural farmers",
        "Trusted by agricultural distributors",
        "High-performance systems for nurseries",
      ]}
    />
  );
}
