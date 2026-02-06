import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function SriLankaPage() {
  return (
    <CountryPageLayout
      countryName="Sri Lanka"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Sri Lanka.png"
      welcomeMessage="Welcome to our Sri Lanka irrigation solutions page."
      greeting="ආයුබෝවන්! (Ayubowan! Hello!)"
      introduction={[
        "Vidhi Enterprises provides efficient irrigation systems for Sri Lanka’s diverse farming sectors, including vegetable cultivation, tea estates, fruit orchards, and greenhouses.",
        "Sri Lanka’s tropical climate demands systems that perform reliably in humid conditions.",
      ]}
      marketInsights={[
        "Tea and fruit plantations increasingly use micro-irrigation for controlled water supply.",
        "Greenhouses use foggers to maintain humidity levels.",
      ]}
      products={[
        "Drip lines",
        "Drippers",
        "Rain guns",
        "Mini sprinklers",
        "Foggers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Tea plantations",
        "Vegetable farmers",
        "Fruit orchards",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Humidity-resistant materials",
        "Cost-effective systems for plantations",
        "Trusted exporter to South Asia",
      ]}
    />
  );
}
