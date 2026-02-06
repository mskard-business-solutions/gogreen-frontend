import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function BrazilPage() {
  return (
    <CountryPageLayout
      countryName="Brazil"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Brazil.png"
      welcomeMessage="Welcome to our Brazil irrigation solutions page."
      greeting="Olá! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies robust, high-performance irrigation systems to Brazil’s vast agricultural sector, including coffee plantations, sugarcane estates, fruit orchards, and vegetable farms.",
        "Given Brazil’s diverse climate — from tropical Amazonia to semi-arid Northeast regions — farmers rely heavily on precision irrigation systems that conserve water and enhance crop productivity.",
      ]}
      marketInsights={[
        "Brazil is one of the world’s largest agricultural producers, increasing demand for plantation sprinklers, filtration systems, and durable drip lines.",
        "Irrigation adoption is rapidly increasing in coffee-growing regions due to erratic rainfall patterns.",
      ]}
      products={[
        "Heavy-duty inline drip lines",
        "PC/Non-PC orchard drippers",
        "Plantation sprinklers",
        "Impact sprinklers",
        "Sand media & disc filters",
        "HDPE pipes & PP fittings",
      ]}
      industries={[
        "Coffee plantations",
        "Sugarcane farms",
        "Fruit orchards",
        "Vegetable growers",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Products ideal for large-scale commercial farming",
        "Durable systems designed for tropical and semi-arid climates",
        "Strong export network for Latin American destinations",
        "High water efficiency for high-value crops",
      ]}
    />
  );
}
