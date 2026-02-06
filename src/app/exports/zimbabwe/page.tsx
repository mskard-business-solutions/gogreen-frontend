import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

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
