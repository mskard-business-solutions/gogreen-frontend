import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Oman | Vidhi Enterprises",
  keywords: "irrigation Oman, drip irrigation Oman, sprinkler Oman",
  description:
    "Vidhi Enterprises exports UV-resistant drip systems, sprinklers, foggers and filters for Oman’s landscaping and agricultural sectors.",
};

export default function OmanPage() {
  return (
    <CountryPageLayout
      countryName="Oman"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Oman.png"
      welcomeMessage="Welcome to our Oman irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies robust irrigation systems designed for Oman’s harsh desert climate, serving farms, landscaping companies, and government green projects.",
        "Oman’s rapid urban development fuels strong demand for water-efficient irrigation.",
      ]}
      marketInsights={[
        "Landscape contractors rely on mini sprinklers and online drippers.",
        "Filtration systems are essential due to the widespread use of treated wastewater.",
      ]}
      products={[
        "Drip laterals",
        "Online drippers",
        "Mini sprinklers",
        "Foggers",
        "Disc filters",
        "HDPE pipes",
      ]}
      industries={[
        "Landscaping",
        "Government irrigation",
        "Greenhouses",
        "Commercial farms",
      ]}
      whyChooseUs={[
        "UV-resistant systems",
        "High performance in arid zones",
        "Trusted GCC exporter",
      ]}
    />
  );
}
