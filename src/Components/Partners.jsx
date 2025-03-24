import React from "react";
import { motion } from "framer-motion";
import partners from "/assets/partners.svg";

const Logos = [partners, partners, partners, partners, partners, partners, partners];

const Partners = () => {
  return (
    <div className="overflow-hidden w-full pt-5">
      <motion.div
        className="flex space-x-6 w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...Logos, ...Logos, ...Logos].map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-20 w-auto" />
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
