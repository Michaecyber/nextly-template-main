"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

 
  
export function AuroraBackgroundDemo() {
       
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-orange-500 text-3xl md:text-7xl font-bold orange:text-white text-center">
        Join our next Open Day on 16 July 2024
        </div>
        <div className="text-teal-500 font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Student Accommodation Available.
        </div>
        <button className="bg-orange-500 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Book now
        </button>
      </motion.div>
    </AuroraBackground>    
  );
}
