import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function MoroccoPage() {
  return (
    <CountryPageLayout
      countryName="Morocco"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Morocco.png"
      welcomeMessage="Welcome to our Morocco irrigation solutions page."
      greeting="مرحبا! (Marhaban! Hello!)"
      introduction={[
        "Vidhi Enterprises exports durable irrigation systems to Morocco’s agriculture sector, supporting citrus farms, olive plantations, and vegetable growers.",
        "Morocco’s dry climate and expanding farmland make efficient irrigation essential.",
      ]}
      marketInsights={[
        "Morocco is one of the largest olive producers, requiring high-performance drip systems.",
        "Filtration is crucial due to brackish water sources in many regions.",
      ]}
      products={[
        "Drip laterals",
        "Online drippers",
        "Mini sprinklers",
        "Foggers",
        "Filtration systems",
        "HDPE pipes",
      ]}
      industries={[
        "Olive plantations",
        "Citrus farms",
        "Vegetable growers",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Designed for dry and saline conditions",
        "Strong export links with North Africa",
        "Durable systems that increase crop yield",
      ]}
    />
  );
}
