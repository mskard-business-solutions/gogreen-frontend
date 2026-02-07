import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Qatar | Vidhi Enterprises",
  keywords: "irrigation Qatar, drip irrigation Qatar, sprinkler Qatar",
  description:
    "Vidhi Enterprises exports drip systems, micro sprinklers, foggers and filtration units for Qatar’s landscaping and agricultural sectors.",
};

export default function QatarPage() {
  return (
    <CountryPageLayout
      countryName="Qatar"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Qatar.png"
      welcomeMessage="Welcome to our Qatar irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies premium irrigation systems for Qatar’s landscaping, public parks, farms, and sports facilities.",
        "Qatar’s high temperatures require UV-resistant irrigation materials with long service life.",
      ]}
      marketInsights={[
        "Drip irrigation is widely used for urban landscaping and government projects.",
        "Filtration systems are essential due to treated water usage.",
      ]}
      products={[
        "Online drippers",
        "Drip laterals",
        "Mini sprinklers",
        "Foggers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Landscaping",
        "Municipal irrigation",
        "Greenhouses",
        "Nurseries",
      ]}
      whyChooseUs={[
        "High UV stability",
        "Reliable GCC exporter",
        "Durable desert-ready materials",
      ]}
    />
  );
}
