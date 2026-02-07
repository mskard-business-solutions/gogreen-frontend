import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function Bangladesh() {
  return (
    <CountryPageLayout
      countryName="Bangladesh"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Bangladesh.png"
      welcomeMessage="Welcome to our Bangladesh irrigation solutions page."
      greeting="As-salamu alaykum! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Bangladesh’s agriculture by supplying easy-to-install drip systems that help farmers improve productivity across fertile plains and various agricultural landscapes.",
        "Bangladesh’s agricultural regions benefit from micro-irrigation solutions, which are highly suitable for improving vegetable and fruit cultivation and optimizing water usage.",
      ]}
      marketInsights={[
        "Farmers prefer efficient irrigation materials that are easy to manage and help maximize yields in diverse soil conditions.",
        "Micro-irrigation adoption is growing in commercial vegetable farming and fruit orchard management.",
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
        "Commercial vegetable farmers",
        "Rice and crop diversifcation groups",
        "Mango and fruit orchards",
        "Agricultural cooperative projects",
      ]}
      whyChooseUs={[
        "Affordable, water-efficient irrigation systems",
        "Easy installation and low maintenance",
        "Durable materials for long-term use",
        "Trusted partner for sustainable farming",
      ]}
    />
  );
}

