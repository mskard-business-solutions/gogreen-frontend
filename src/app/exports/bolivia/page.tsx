import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function Bolivia() {
  return (
    <CountryPageLayout
      countryName="Bolivia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Bolivia.png"
      welcomeMessage="Welcome to our Bolivia irrigation solutions page."
      greeting="¡Hola! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Bolivia’s agriculture by supplying easy-to-install drip systems that help farmers improve productivity across various agricultural landscapes, from the Andes to the lowlands.",
        "Bolivia’s diverse agricultural regions benefit from micro-irrigation solutions, which are highly suitable for improving vegetable and fruit cultivation in different altitudes and climates.",
      ]}
      marketInsights={[
        "Farmers in Bolivia prefer efficient and cost-effective irrigation materials that are easy to manage and help maximize crop yields.",
        "Micro-irrigation adoption is growing in community farming projects and commercial fruit production.",
      ]}
      products={[
        "Low-pressure drip laterals (16mm)",
        "Online drippers (2–4 LPH)",
        "Microtubes & connectors",
        "Mini sprinklers for nurseries",
        "Compact screen filtration units",
        "Small-diameter HDPE coils",
      ]}
      industries={[
        "Smallholder vegetable farmers",
        "Quinoa and crop diversification groups",
        "Fruit orchards in the valleys",
        "Rural community development projects",
      ]}
      whyChooseUs={[
        "Affordable, water-efficient irrigation systems",
        "Easy installation across different terrains",
        "Durable materials requiring low maintenance",
        "Trusted partner for sustainable agricultural initiatives",
      ]}
    />
  );
}

