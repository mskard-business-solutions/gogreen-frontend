import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Mongolia | Vidhi Enterprises",
  keywords: "irrigation Mongolia, greenhouse irrigation Mongolia, drip irrigation Mongolia",
  description:
    "Vidhi Enterprises exports drip systems, foggers, micro sprinklers and filtration units for Mongolia’s greenhouses and protected farming sectors.",
};

export default function MongoliaPage() {
  return (
    <CountryPageLayout
      countryName="Mongolia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Mongolia.png"
      welcomeMessage="Welcome to our Mongolia irrigation solutions page."
      greeting="Сайн байна уу! (Sain baina uu! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies robust irrigation systems suited for Mongolia’s extreme climatic conditions, supporting greenhouses, protected farming, and horticulture.",
        "Mongolia’s low temperatures require efficient irrigation technologies that perform reliably in controlled farming environments.",
      ]}
      marketInsights={[
        "Greenhouse production is increasing due to demand for fresh vegetables.",
        "Foggers and micro sprinklers are used extensively in temperature-controlled agriculture.",
      ]}
      products={[
        "Inline drip pipes",
        "Micro sprinklers",
        "Foggers & misters",
        "Filtration systems",
        "HDPE pipes",
      ]}
      industries={[
        "Greenhouses",
        "Horticulture",
        "Protected farming",
        "Vegetable production",
      ]}
      whyChooseUs={[
        "Reliable performance in cold environments",
        "High precision irrigation for greenhouses",
        "Durable systems suited for long-term use",
      ]}
    />
  );
}
