import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Solutions Bhutan | Vidhi Enterprises",
  keywords: "drip irrigation Bhutan, micro irrigation Bhutan, irrigation Bhutan",
  description: "Vidhi Enterprises exports low-pressure drip systems and micro-irrigation accessories suited for Bhutan's terrace farming and smallholder agriculture.",
};

export default function BhutanPage() {
  return (
    <CountryPageLayout
      countryName="Bhutan"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Bhutan.png"
      welcomeMessage="Welcome to our Bhutan irrigation solutions page."
      greeting="Kuzu Zangpo La! (Hello!)"
      introduction={[
        "Vidhi Enterprises supports Bhutan’s agriculture by supplying easy-to-install drip systems that help smallholder farmers improve productivity across terraced fields and high-altitude farmlands.",
        "Bhutan’s rural regions rely heavily on low-pressure irrigation solutions, which makes micro-irrigation highly suitable for improving vegetable and fruit cultivation.",
      ]}
      marketInsights={[
        "Due to mountainous terrain, farmers prefer lightweight irrigation materials that are easy to transport and install.",
        "Micro-irrigation adoption is rising in community farming and organic cultivation projects.",
      ]}
      products={[
        "Low-pressure drip laterals (16mm)",
        "Online drippers (2–4 LPH)",
        "Microtubes & connectors",
        "Mini sprinklers for nurseries",
        "Compact screen filtration units",
        "Small-diameter HDPE coils",
      ]}
      industries={[
        "Smallholder vegetable farmers",
        "Terrace farming groups",
        "Fruit orchards",
        "Community agriculture projects",
      ]}
      whyChooseUs={[
        "Affordable, low-pressure irrigation systems",
        "Easy installation on slopes and terraced farms",
        "Durable materials that reduce maintenance",
        "Trusted supplier for rural farming initiatives",
      ]}
    />
  );
}
