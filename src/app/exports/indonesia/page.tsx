import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidhi Enterprises - Indonesia Irrigation Solutions",
  description: "Vidhi Enterprises exports drip lines, sprinklers, foggers and filtration systems for Indonesia's rice farms, plantations and greenhouses.",
  keywords: "irrigation Indonesia, drip irrigation Indonesia, plantation irrigation Indonesia",
};

export default function Indonesia() {
  return (
    <CountryPageLayout
      countryName="Indonesia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Indonesia.png"
      welcomeMessage="Welcome to our Indonesia irrigation solutions page."
      greeting="Halo! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies efficient drip and sprinkler irrigation systems to Indonesia's agriculture industry, supporting rice fields, plantations, and horticulture farms.",
        "Indonesia's tropical climate and abundant rainfall make controlled irrigation essential for consistent crop quality.",
      ]}
      marketInsights={[
        "Rice nurseries prefer mini sprinklers for uniform seedbed watering.",
        "Plantation crops such as palm oil and rubber increasingly use drip systems.",
      ]}
      products={[
        "Drip lines",
        "Mini sprinklers",
        "Foggers & misters",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Rice nurseries",
        "Fruit & vegetable farming",
        "Plantations",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Heat-resistant and durable products",
        "Efficient systems for tropical climates",
        "Trusted exporter for Southeast Asia",
      ]}
    />
  );
}

