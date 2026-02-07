import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Philippines | Vidhi Enterprises",
  keywords: "irrigation Philippines, drip Philippines, greenhouse irrigation Philippines",
  description:
    "Vidhi Enterprises exports drip lines, sprinklers, foggers and filters suited for the Philippines’ rice farms, plantations and greenhouses.",
};

export default function PhilippinesPage() {
  return (
    <CountryPageLayout
      countryName="Philippines"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Philippines.png"
      welcomeMessage="Welcome to our Philippines irrigation solutions page."
      greeting="Kumusta! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports the Philippines’ agriculture through efficient irrigation systems suitable for tropical climates, rice fields, plantations, and vegetable farms.",
        "High humidity and seasonal typhoons make durable irrigation systems essential.",
      ]}
      marketInsights={[
        "Rice farmers commonly use mini sprinklers for seedbed irrigation.",
        "Greenhouses in cooler regions use foggers to maintain optimal temperatures.",
      ]}
      products={[
        "Drip lines",
        "Mini sprinklers",
        "Foggers & misters",
        "Basic filters",
        "HDPE pipes",
      ]}
      industries={[
        "Rice farming",
        "Vegetable farming",
        "Plantations",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Humidity-resistant systems",
        "Affordable options for rural farmers",
        "Strong exporter for Southeast Asia",
      ]}
    />
  );
}
