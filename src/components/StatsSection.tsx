"use client";

import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { label: "Happy Clients", value: "Trusted WorldWide" },
    { label: "Projects Completed", value: "Sustainable & Tailored" },
    { label: "Dedicated Experts", value: "Skilled and Reliable" },
    { label: "Award & Recognition", value: "Excellence in Innovations" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section 
      className="relative py-24 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/img/design-4.png')" }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                className="text-3xl lg:text-4xl font-bold"
              >
                {stat.label}
              </motion.h3>
              <p className="text-lg font-medium text-white/80">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
