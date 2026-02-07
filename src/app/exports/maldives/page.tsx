import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Maldives | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip systems, sprinklers, foggers and filtration units ideal for Maldives resorts, landscaping and nurseries.",
  keywords: "irrigation Maldives, landscape irrigation Maldives, resort irrigation Maldives",
};

export default function Maldives() {
  return (
    <CountryPageLayout
      countryName="Maldives"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Maldives.png" 
      welcomeMessage="Welcome to our Maldives irrigation solutions page."
      greeting="ޝައްސަލާ! (Shassalā! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies corrosion-resistant irrigation systems for Maldives, where resorts, landscaping projects, and nurseries require durable irrigation solutions.",
        "As a coastal island nation, Maldives requires materials that withstand saline conditions and high humidity.",
      ]}
      marketInsights={[
        "Resorts use micro irrigation for landscaping around villas and beachfront areas.",
        "Compact filtration systems are essential where water sources vary.",
      ]}
      products={[
        "Drip pipes",
        "Mini sprinklers",
        "Foggers & misters",
        "Small filtration units",
        "HDPE pipes (coastal-grade)",
      ]}
      industries={[
        "Resorts",
        "Landscaping contractors",
        "Nurseries",
        "Home gardens",
      ]}
      whyChooseUs={[
        "Coastal-resistant materials",
        "Compact systems for small landscaped areas",
        "Trusted supplier for resort irrigation",
      ]}
    />
  );
}
