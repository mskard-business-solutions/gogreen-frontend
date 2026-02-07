"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C1.png",
    text: "“Engineering Smart Irrigation Solutions for a Greener Tomorrow”",
  },
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C11.png",
    text: "“Delivering Precision Watering Systems That Grow More with Less”",
  },
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C3.png",
    text: "“Trusted Manufacturer of Drip, Sprinkler & Micro Irrigation Products”",
  },
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C4.png",
    text: "“Empowering Farmers Through Advanced Water-Saving Technologies”",
  },
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C5.png",
    text: "“Quality Irrigation Components Designed for Durability and Performance”",
  },
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C6.png",
    text: "“Innovating precision irrigation since 1983”",
  },
  {
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/C9.png",
    text: "“Building a Sustainable World, One Drop at a Time”",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[500px] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt={`Slide ${current}`}
              fill
              className="object-cover"
              priority={current === 0}
            />
          </div>
          <div className="carousel-caption">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
                className="max-w-4xl mx-auto"
              >
                <h3 className="text-xl lg:text-5xl font-bold !text-white mb-5 leading-tight drop-shadow-lg">
                  {slides[current].text}
                </h3>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8" : "bg-white/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
