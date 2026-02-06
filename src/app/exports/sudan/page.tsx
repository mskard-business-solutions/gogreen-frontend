import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function SudanPage() {
  return (
    <CountryPageLayout
      countryName="Sudan"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Sudan.png"
      welcomeMessage="Welcome to our Sudan irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises delivers reliable irrigation systems to Sudan, supporting large-scale farms, orchards, and vegetable growers.",
        "Sudan’s hot climate requires durable and water-efficient irrigation technologies.",
      ]}
      marketInsights={[
        "Large farms use impact sprinklers and filtration systems.",
        "Drip irrigation adoption is rising in horticulture.",
      ]}
      products={[
        "Drip lines",
        "Impact sprinklers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Commercial agriculture",
        "Vegetable farming",
        "Orchards",
      ]}
      whyChooseUs={[
        "Durable systems for extreme heat",
        "Efficient irrigation solutions",
        "Reliable African export network",
      ]}
    />
  );
}
