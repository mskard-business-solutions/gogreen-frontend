import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Guadeloupe | Vidhi Enterprises",
  keywords: "irrigation Guadeloupe, landscaping irrigation Caribbean, drip Guadeloupe",
  description: "Vidhi Enterprises exports drip systems, foggers, sprinklers and filtration units for Guadeloupe's landscaping, nurseries and farms.",
};

export default function GuadeloupePage() {
  return (
    <CountryPageLayout
      countryName="Guadeloupe"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Guadeloupe.png"
      welcomeMessage="Welcome to our Guadeloupe irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises provides irrigation systems to Guadeloupe's landscaping sector, nurseries, and small-scale agriculture.",
        "As a Caribbean island, Guadeloupe requires coastal-resistant materials that withstand humidity and saline conditions.",
      ]}
      marketInsights={[
        "Resort landscaping and nurseries frequently use micro sprinklers and foggers.",
        "Compact filtration is essential due to varying water quality.",
      ]}
      products={[
        "Drip laterals & drippers",
        "Mini sprinklers",
        "Foggers & misters",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Resorts & landscaping",
        "Nurseries",
        "Smallholder farms",
      ]}
      whyChooseUs={[
        "Coastal-resistant irrigation materials",
        "Reliable Caribbean shipment support",
        "Suitable for horticulture & decorative landscaping",
      ]}
    />
  );
}
