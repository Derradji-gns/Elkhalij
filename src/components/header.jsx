"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export  default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-green-700 text-center">
          ELKHALIJ School For Computer Science
        </div>
        <div
          className="font-extralight text-base md:text-4xl dark:text-green-700 py-4">
          Where innovation meets education
        </div>
        <button
          className="bg-black dark:bg-white rounded-full w-fit text-green-700  px-4 py-2">
          Apply Now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
