import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function Burundi() {
  return (
    <CountryPageLayout
      countryName="Burundi"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Burundi.png"
      welcomeMessage="Welcome to our Burundi irrigation solutions page."
      greeting="Bwakeye! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies robust, high-performance irrigation systems to Burundi’s agricultural sector, supporting smallholder farmers in improving productivity for coffee, tea, and food crops.",
        "Given Burundi’s hilly terrain and tropical climate, farmers rely on efficient irrigation systems that conserve water and enhance crop yields on terraced lands.",
      ]}
      marketInsights={[
        "Agriculture is the backbone of Burundi’s economy, driving demand for affordable and durable irrigation solutions suitable for small-scale farming.",
        "Irrigation adoption is increasing to mitigate the effects of climate variability and ensure food security throughout the year.",
      ]}
      products={[
        "Drip irrigation kits for small plots",
        "Sprinklers for coffee and tea plantations",
        "Rain guns for larger fields",
        "HDPE pipes and fittings",
        "Filtration systems",
        "Water storage solutions",
      ]}
      industries={[
        "Coffee and tea cooperatives",
        "Vegetable and fruit farmers",
        "Rice growers (in marshlands)",
        "Community garden projects",
      ]}
      whyChooseUs={[
        "Affordable solutions tailored for smallholders",
        "Durable equipment suited for hilly terrain",
        "Commitment to improving rural livelihoods",
        "Expertise in tropical agriculture irrigation",
      ]}
    />
  );
}

