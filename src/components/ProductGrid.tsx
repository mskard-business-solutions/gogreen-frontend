"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Drip Irrigation",
    desc: "Save water, grow smarter — drip irrigation delivers every drop with precision.",
    img: "/img/9.png",
    icon: "/img/4.png",
    link: "/dripirri"
  },
  {
    title: "Sprinkler Irrigation",
    desc: "From corners to center, sprinklers reach everywhere. Healthy fields grow evenly.",
    img: "/img/10.png",
    icon: "/img/5.png",
    link: "/sprinkler"
  },
  {
    title: "Rain Sprinkler (Rain Gun)",
    desc: "Bigger spray, better yield. Raingun irrigation transforms your field’s productivity.",
    img: "/img/11.png",
    icon: "/img/6.png",
    link: "/rainsprinkler"
  },
  {
    title: "Landscape Irrigation",
    desc: "Upgrade your outdoors with intelligent irrigation. A greener view, a happier home.",
    img: "/img/12.png",
    icon: "/img/7.png",
    link: "/landscape"
  },
  {
    title: "Economical Irrigation",
    desc: "Save water, save money, and grow more. Smart irrigation makes every drop count.",
    img: "/img/13.png",
    icon: "/img/8.png",
    link: "/economical"
  },
  {
    title: "Vidhi Kit",
    desc: "Vidhi Kit — your all-in-one irrigation solution. Simple to install, powerful performance.",
    img: "/img/14.png",
    icon: "/img/15.png",
    link: "/vidhi-kit"
  }
];

const ProductGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-16 max-w-lg"
        >
          <p className="text-lg font-bold text-primary mb-2">Our Products</p>
          <hr className="border-2 border-[#006400] mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-5">Products That We Offer For You</h1>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="product-card group"
            >
              <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex-grow overflow-hidden min-h-[300px]"
                >
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ backgroundColor: "rgb(255, 255, 255)" }}
                  whileHover={{
                    backgroundColor: "rgb(28, 158, 28)",
                    transition: { duration: 0.4 },
                  }}
                  className="p-8 flex flex-col items-center flex-grow"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-full bg-white shadow-lg mx-auto mb-6 flex items-center justify-center p-4"
                  >
                    <Link href={p.link}>
                      <Image src={p.icon} alt="Icon" width={60} height={60} className="w-full h-full object-contain" />
                    </Link>
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-4 text-heading group-hover:text-white transition-colors duration-300">{p.title}</h4>
                  <p className="mb-8 font-semibold leading-relaxed text-secondary group-hover:text-white/90 transition-colors duration-300">
                    {p.desc}
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link 
                      href={p.link} 
                      className="inline-flex items-center text-primary font-bold group-hover:text-white transition-all duration-300 gap-2"
                    >
                      <i className="fa fa-plus"></i>
                      <span>Read More</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
