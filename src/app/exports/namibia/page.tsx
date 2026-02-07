import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Namibia | Vidhi Enterprises",
  keywords: "irrigation Namibia, desert irrigation Namibia, drip Namibia",
  description:
    "Vidhi Enterprises exports UV-resistant drip systems, sprinklers and filtration units for Namibia’s farms and landscaping projects.",
};

export default function NamibiaPage() {
  return (
    <CountryPageLayout
      countryName="Namibia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Namibia.png"
      welcomeMessage="Welcome to our Namibia irrigation solutions page."
      greeting="Hallo! (Hello!)"
      introduction={[
        "Vidhi Enterprises exports durable irrigation systems for Namibia’s dry and desert-like climate, supporting vegetable growers, livestock fodder farms, and landscaping projects.",
        "Irrigation is essential in Namibia’s agriculture due to low rainfall and limited freshwater resources.",
      ]}
      marketInsights={[
        "High UV resistance is crucial due to intense sunlight.",
        "Micro sprinklers and drip systems are popular in horticulture.",
      ]}
      products={[
        "Drip pipes",
        "Online drippers",
        "Mini & micro sprinklers",
        "Filtration systems",
        "HDPE pipes",
      ]}
      industries={[
        "Horticulture",
        "Vegetable farming",
        "Landscaping",
        "Fodder cultivation",
      ]}
      whyChooseUs={[
        "UV-resistant materials",
        "Reliable systems for arid climates",
        "Strong export support for Southern Africa",
      ]}
    />
  );
}
