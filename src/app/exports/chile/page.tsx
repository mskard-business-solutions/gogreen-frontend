import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function ChilePage() {
  return (
    <CountryPageLayout
      countryName="Chile"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Chile.png"
      welcomeMessage="Welcome to our Chile irrigation solutions page."
      greeting="¡Hola! (Hello!)"
      introduction={[
        "Vidhi Enterprises delivers high-quality irrigation systems to Chile’s thriving agricultural sector, including vineyards, fruit orchards, and greenhouse farms.",
        "Chile’s diverse geography — from arid northern regions to Mediterranean climates in the central zone — makes precision irrigation essential for sustainable crop production.",
      ]}
      marketInsights={[
        "Chile is one of the world’s largest exporters of grapes and cherries, creating strong demand for high-efficiency vineyard irrigation systems.",
        "Advanced filtration systems are widely used due to variable water quality from wells and rivers.",
      ]}
      products={[
        "Precision inline vineyard drip lines",
        "Orchard drippers (PC/Non-PC)",
        "Mini sprinklers for fruit orchards",
        "Foggers & greenhouse misters",
        "Disc & screen filters",
        "HDPE pipes & compression fittings",
      ]}
      industries={[
        "Vineyards & wineries",
        "Fruit orchards",
        "Vegetable growers",
        "Greenhouses & nurseries",
      ]}
      whyChooseUs={[
        "Highly precise irrigation systems suited for long-row vineyards",
        "Durable and clog-resistant drippers for orchard use",
        "Efficient filtration systems for mixed water sources",
        "Strong export reliability to South America",
      ]}
    />
  );
}
