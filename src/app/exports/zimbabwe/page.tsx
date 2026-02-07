import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Zimbabwe | Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip kits, sprinklers and HDPE pipe systems for Zimbabwe’s farming and community irrigation sectors.",
  keywords: "irrigation Zimbabwe, drip Zimbabwe, micro irrigation Zimbabwe",
};

export default function ZimbabwePage() {
  return (
    <CountryPageLayout
      countryName="Zimbabwe"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Zimbabwe.png"
      welcomeMessage="Welcome to our Zimbabwe irrigation solutions page."
      greeting="Mhoro! (Hello!)"
      introduction={[
        "Vidhi Enterprises provides efficient and durable irrigation systems for Zimbabwe’s vegetable growers, orchards, and community projects.",
        "Zimbabwe’s variable rainfall patterns make irrigation essential for consistent farming.",
      ]}
      marketInsights={[
        "Vegetable farms use mini sprinklers widely.",
        "Drip kits are popular for rural agriculture.",
      ]}
      products={[
        "Drip kits",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable growers",
        "Orchards",
        "Community farms",
      ]}
      whyChooseUs={[
        "Affordable irrigation",
        "Reliable performance",
        "Easy installation",
      ]}
    />
  );
}
