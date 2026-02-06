import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function IraqPage() {
  return (
    <CountryPageLayout
      countryName="Iraq"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Iraq.png"
      welcomeMessage="Welcome to our Iraq irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies reliable irrigation products to Iraq’s agricultural and landscaping sectors.",
        "With increasing focus on agricultural redevelopment, Iraq benefits from efficient and durable micro-irrigation solutions.",
      ]}
      marketInsights={[
        "Iraq’s farms rely heavily on efficient irrigation due to harsh summers.",
        "Government-backed agricultural programs are encouraging modern irrigation.",
      ]}
      products={[
        "Drip laterals",
        "Online drippers",
        "Impact sprinklers",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable farms",
        "Orchards",
        "Landscaping",
        "Nurseries",
      ]}
      whyChooseUs={[
        "Durable materials for high temperatures",
        "Cost-efficient solutions for large farms",
        "Reliable exports to Middle Eastern ports",
      ]}
    />
  );
}
