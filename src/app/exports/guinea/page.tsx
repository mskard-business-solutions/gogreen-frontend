import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function GuineaPage() {
  return (
    <CountryPageLayout
      countryName="Guinea"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Guinea.png"
      welcomeMessage="Welcome to our Guinea irrigation solutions page."
      greeting="Bonjour! (Hello!)"
      introduction={[
        "Vidhi Enterprises supplies irrigation systems to Guinea’s smallholder farmers, horticulture growers, and agricultural cooperatives.",
        "Water-efficient drip irrigation is becoming increasingly important due to varying rainfall patterns.",
      ]}
      marketInsights={[
        "There is growing adoption of low-cost irrigation kits among farmers.",
        "Vegetable farms and nurseries prefer simpler, easy-to-use systems.",
      ]}
      products={[
        "Drip lines & drippers",
        "Micro sprinklers",
        "Garden sprayers",
        "Basic filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable farms",
        "Smallholder agriculture",
        "Community farms",
      ]}
      whyChooseUs={[
        "Affordable and durable systems",
        "Reliable performance in tropical weather",
        "Easy installation for rural areas",
      ]}
    />
  );
}
