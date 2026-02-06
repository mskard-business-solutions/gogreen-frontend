import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function UAEPage() {
  return (
    <CountryPageLayout
      countryName="United Arab Emirates"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/UAE.png"
      welcomeMessage="Welcome to our UAE irrigation solutions page."
      greeting="مرحباً! (Marhaban! Hello!)"
      introduction={[
        "Vidhi Enterprises proudly supplies high‑quality irrigation systems to the United Arab Emirates, a region where landscaping, agriculture, and municipal green projects continue to expand rapidly.",
        "Given the UAE’s harsh desert climate, water‑efficient systems such as drip irrigation, advanced filtration, and UV‑stable materials are essential for maintaining beautiful landscapes and supporting farming initiatives.",
      ]}
      marketInsights={[
        "The UAE invests heavily in sustainable irrigation technologies due to limited freshwater resources.",
        "High demand exists for durable, heat‑resistant products used by landscaping contractors, nurseries, and government projects across Dubai, Abu Dhabi, and Sharjah.",
      ]}
      products={[
        "UV‑stable drip laterals & drippers",
        "Impact & mini sprinklers",
        "Foggers and micro sprayers",
        "Disc and screen filtration systems",
        "HDPE pipes & compression fittings",
      ]}
      industries={[
        "Landscaping contractors",
        "Municipal irrigation projects",
        "Resorts, parks & gardens",
        "Farming and greenhouse sectors",
      ]}
      whyChooseUs={[
        "Materials engineered for extreme heat and desert climates",
        "Reliable bulk export capability to Jebel Ali",
        "Competitive pricing with premium product quality",
        "Experienced supplier for GCC markets",
      ]}
    />
  );
}
