import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Malawi | Vidhi Enterprises",
  keywords: "irrigation Malawi, drip Malawi, small farm irrigation Malawi",
  description:
    "Vidhi Enterprises exports affordable drip kits, sprinklers and HDPE coils for Malawi’s farmers and agricultural organizations.",
};

export default function MalawiPage() {
  return (
    <CountryPageLayout
      countryName="Malawi"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Malawi.png"
      welcomeMessage="Welcome to our Malawi irrigation solutions page."
      greeting="Moni! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies affordable micro-irrigation systems for Malawi’s small farmers, agricultural cooperatives, and development organizations.",
        "Drip irrigation is widely used to increase vegetable production and improve water management.",
      ]}
      marketInsights={[
        "NGO-supported farming programs fuel demand for drip kits.",
        "Small farms rely heavily on low-pressure irrigation systems.",
      ]}
      products={[
        "Drip irrigation kits",
        "16mm drip laterals",
        "Micro sprinklers",
        "Screen filters",
        "HDPE pipe coils",
      ]}
      industries={[
        "Smallholder farmers",
        "Vegetable growers",
        "Community irrigation programs",
      ]}
      whyChooseUs={[
        "Cost-effective solutions",
        "Easy installation for rural farms",
        "Strong export supply network in Africa",
      ]}
    />
  );
}
