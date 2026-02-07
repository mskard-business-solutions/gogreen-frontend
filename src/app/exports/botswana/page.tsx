import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Botswana | Vidhi Enterprises",
  keywords: "irrigation Botswana, drip irrigation Botswana, micro irrigation Botswana",
  description: "Vidhi Enterprises exports UV-resistant drip systems, micro sprinklers, and filtration solutions suited for Botswana's dry agricultural regions.",
};

export default function Botswana() {
  return (
    <CountryPageLayout
      countryName="Botswana"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Botswana.png"
      welcomeMessage="Welcome to our Botswana irrigation solutions page."
      greeting="Dumela! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies durable drip and sprinkler irrigation systems to Botswana, where water scarcity makes efficient irrigation essential for agricultural growth.",
        "Farmers, cooperatives, and horticulture businesses rely on reliable irrigation solutions to successfully cultivate vegetables, fruit trees, and fodder crops.",
      ]}
      marketInsights={[
        "Due to frequent droughts, Botswana prioritizes water-efficient irrigation systems.",
        "Demand is high for UV-resistant products that can withstand strong sunlight and high temperatures.",
      ]}
      products={[
        "UV-stable drip laterals",
        "Online & inline drippers",
        "Mini & micro sprinklers",
        "Foggers for nurseries",
        "Screen & disc filtration units",
        "HDPE pipes & compression fittings",
      ]}
      industries={[
        "Vegetable farmers",
        "Livestock fodder growers",
        "Commercial horticulture",
        "Government irrigation programs",
      ]}
      whyChooseUs={[
        "Products designed for desert and semi-arid climates",
        "High UV resistance and long service life",
        "Reliable supply chain for Southern Africa",
        "Affordable solutions for small and medium farms",
      ]}
    />
  );
}

