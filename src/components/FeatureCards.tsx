"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCards = () => {
  const features = [
    {
      icon: "/img/few Logo.png",
      title: "100+ Reliable Products for Small & Large Farms",
      description: "Builds instant credibility and trust",
    },
    {
      icon: "/img/2.png",
      title: "Quality You Can Rely On",
      description: "Simple, strong, and customer-focused",
    },
    {
      icon: "/img/3.png",
      title: "Innovation Meets Integrity",
      description: "Shows modern, forward-thinking values with honesty",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="w-full py-5">
      <div className="max-w-7xl mx-auto py-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg flex items-center h-full px-10 py-8 min-h-[180px]"
              >
                <div className="flex w-full items-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-light flex items-center justify-center"
                  >
                    <Image src={f.icon} alt={f.title} width={80} height={80} className="w-16 h-16 object-contain" />
                  </motion.div>
                  <div className="pl-6">
                    <h4 className="text-primary font-bold mb-2 leading-tight">{f.title}</h4>
                    <span className="text-secondary font-bold text-sm">{f.description}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCards;
