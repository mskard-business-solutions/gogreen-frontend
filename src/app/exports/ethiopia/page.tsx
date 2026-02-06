import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function EthiopiaPage() {
  return (
    <CountryPageLayout
      countryName="Ethiopia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Ethiopia.png"
      welcomeMessage="Welcome to our Ethiopia irrigation solutions page."
      greeting="Selam! (Hello!)"
      introduction={[
        "Vidhi Enterprises provides affordable and efficient micro-irrigation solutions to Ethiopia’s farmers, cooperatives, and agricultural development programs.",
        "Micro and drip irrigation are helping Ethiopian farmers improve yields despite water scarcity and unpredictable rainfall.",
      ]}
      marketInsights={[
        "Ethiopia’s vegetable and horticulture sectors are growing, increasing demand for drip kits and small sprinklers.",
        "NGO-funded irrigation programs play a large role in expanding micro-irrigation adoption.",
      ]}
      products={[
        "Low-pressure drip kits",
        "16mm laterals",
        "Micro sprinklers",
        "Screen filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Smallholder farming",
        "Vegetable cultivation",
        "Community irrigation programs",
      ]}
      whyChooseUs={[
        "Affordable systems for rural and small farms",
        "Easy installation with low-pressure water",
        "Trusted partner for NGO agriculture projects",
      ]}
    />
  );
}
