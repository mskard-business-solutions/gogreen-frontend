import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function VietnamPage() {
  return (
    <CountryPageLayout
      countryName="Vietnam"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Vietnam.png"
      welcomeMessage="Welcome to our Vietnam irrigation solutions page."
      greeting="Xin chào! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies high-efficiency irrigation systems to Vietnam’s thriving agriculture sector, supporting coffee farms, fruit plantations, and vegetable growers.",
        "Vietnam’s tropical climate requires durable and clog-resistant irrigation systems.",
      ]}
      marketInsights={[
        "Coffee plantations often use inline drip systems.",
        "Greenhouses rely on foggers and mini sprinklers.",
      ]}
      products={[
        "Drip lines",
        "Plantation drippers",
        "Foggers",
        "Mini sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Coffee farms",
        "Fruit plantations",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Durable systems",
        "Clog-resistant technology",
        "Reliable Asian export supply",
      ]}
    />
  );
}
