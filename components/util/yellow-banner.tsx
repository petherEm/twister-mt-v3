"use client";
import React from "react";
import { motion } from "framer-motion";

type YellowBannerProps = {
  color?: "black" | "white";
};

const YellowBanner = ({ color = "black" }: YellowBannerProps) => {
  const colorClass = color === "white" ? "bg-black" : "bg-wu-official";

  return (
    <motion.div
      className={`absolute left-0 top-12 h-1 ${colorClass}`}
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  );
};

export default YellowBanner;
