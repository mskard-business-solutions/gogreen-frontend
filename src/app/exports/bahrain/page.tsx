import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function Bahrain() {
  return (
    <CountryPageLayout
      countryName="Bahrain"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Bahrain.png"
      welcomeMessage="Welcome to our Bahrain irrigation solutions page."
      greeting="Assalamu Alaikum! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Bahrain’s agriculture by supplying easy-to-install drip systems that help farmers improve productivity across various farming environments.",
        "Bahrain’s agricultural regions benefit from micro-irrigation solutions, which are highly suitable for improving vegetable and fruit cultivation in arid climates.",
      ]}
      marketInsights={[
        "Farmers in the region prefer efficient irrigation materials that are easy to manage and help conserve water in desert environments.",
        "Micro-irrigation adoption is rising in modern greenhouse farming and hydroponic projects.",
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
        "Greenhouse vegetable growers",
        "Date palm plantations",
        "Fruit orchards",
        "Urban agriculture projects",
      ]}
      whyChooseUs={[
        "Affordable, water-efficient irrigation systems",
        "Easy installation and low maintenance",
        "Durable materials designed for harsh climates",
        "Trusted supplier for agricultural initiatives in the region",
      ]}
    />
  );
}

