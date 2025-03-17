import React from 'react'
import { motion } from 'framer-motion';

const Logos = [
    "/partners.svg",
    "/partners.svg",
    "/partners.svg",
    "/partners.svg",
    "/partners.svg",
    "/partners.svg",
    "/partners.svg",
    "/partners.svg"
];

const Partners = () => {
  return (
    <div className="overflow-hidden w-full pt-10">
      <motion.div
        className="flex w-max space-x-8"
        animate={{ x: [0, -1500] }} // Adjust distance
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...Logos, ...Logos].map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-20 w-auto" />
        ))} 
      </motion.div>
    </div>
  );
}

export default Partners