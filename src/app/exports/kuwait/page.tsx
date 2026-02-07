import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Kuwait | Vidhi Enterprises",
  keywords: "irrigation Kuwait, drip Kuwait, sprinkler Kuwait",
  description: "Vidhi Enterprises exports UV-resistant drip systems, sprinklers, foggers and HDPE lines for Kuwait's landscaping and farming sectors.",
};

export default function KuwaitPage() {
  return (
    <CountryPageLayout
      countryName="Kuwait"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Kuwait.png"
      welcomeMessage="Welcome to our Kuwait irrigation solutions page."
      greeting="مرحبا! (Marhaba! Hello!)"
      introduction={[
        "Vidhi Enterprises supplies durable and UV-resistant irrigation systems to Kuwait’s landscaping, agriculture, and public infrastructure sectors.",
        "Kuwait’s extreme temperatures require long-lasting materials with excellent heat resistance.",
      ]}
      marketInsights={[
        "Municipal landscaping uses drip and micro sprinklers extensively.",
        "Filtration systems are essential due to treated water usage.",
      ]}
      products={[
        "Drip laterals",
        "Online drippers",
        "Micro sprinklers",
        "Foggers",
        "Disc filters",
        "HDPE pipes",
      ]}
      industries={[
        "Landscaping",
        "Government irrigation",
        "Nurseries",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "UV-stable materials for extreme weather",
        "Trusted GCC exporter",
        "Fast shipping and reliable supply",
      ]}
    />
  );
}
