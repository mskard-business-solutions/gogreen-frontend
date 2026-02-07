import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Mozambique | Vidhi Enterprises",
  keywords: "irrigation Mozambique, drip Mozambique, micro irrigation Mozambique",
  description:
    "Vidhi Enterprises exports drip kits, sprinklers and HDPE pipes to Mozambique’s farms and agricultural projects.",
};

export default function MozambiquePage() {
  return (
    <CountryPageLayout
      countryName="Mozambique"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Mozambique.png"
      welcomeMessage="Welcome to our Mozambique irrigation solutions page."
      greeting="Olá! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Mozambique’s agricultural sector with affordable irrigation systems designed for smallholder farms, vegetable production, and development programs.",
        "Water-efficient systems are essential for overcoming dry spells and increasing crop productivity.",
      ]}
      marketInsights={[
        "NGOs often implement drip kits for small farms.",
        "There is strong adoption of micro sprinklers in vegetable fields.",
      ]}
      products={[
        "Drip irrigation kits",
        "16mm laterals",
        "Mini sprinklers",
        "Basic filtration systems",
        "HDPE pipes",
      ]}
      industries={[
        "Smallholder agriculture",
        "Vegetable farms",
        "NGO-led projects",
      ]}
      whyChooseUs={[
        "Affordable systems for rural agriculture",
        "Easy installation and maintenance",
        "Reliable supply for African markets",
      ]}
    />
  );
}
