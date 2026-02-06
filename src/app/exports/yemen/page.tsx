import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function YemenPage() {
  return (
    <CountryPageLayout
      countryName="Yemen"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Yemen.png"
      welcomeMessage="Welcome to our Yemen irrigation solutions page."
      greeting="مرحباً! (Marhaban! Hello!)"
      introduction={[
        "Vidhi Enterprises supports Yemen’s agriculture by supplying efficient irrigation systems for vegetable farming, qat farms, and community agriculture programs.",
        "Due to water scarcity, drip irrigation is essential for sustainable farming.",
      ]}
      marketInsights={[
        "NGOs heavily invest in irrigation support.",
        "Demand rising for low-pressure drip kits.",
      ]}
      products={[
        "Drip kits",
        "Drip lines",
        "Micro sprinklers",
        "Filters",
        "HDPE pipes",
      ]}
      industries={[
        "Vegetable farmers",
        "Qat farms",
        "Community projects",
      ]}
      whyChooseUs={[
        "Water-saving systems",
        "Affordable for rural farms",
        "Reliable Middle East export",
      ]}
    />
  );
}
