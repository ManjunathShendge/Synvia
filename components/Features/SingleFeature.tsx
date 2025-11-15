"use client";

import React, { useRef, useState } from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<{ transform: string }>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
  });

  // 3D Tilt Handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    const x = (relY - rect.height / 2) / 20;
    const y = -(relX - rect.width / 2) / 20;

    setTransformStyle({
      transform: `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(1.04)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          ...transformStyle,
          transition: "transform .25s cubic-bezier(.2,.9,.3,1)",
        }}
        className="
          group relative rounded-2xl p-8 xl:p-12.5 cursor-pointer 
          bg-white/10 dark:bg-blacksection/40 
          backdrop-blur-xl 
          border border-white/20 dark:border-white/10 
          shadow-lg 
          transition-all duration-300 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Glowing border on hover */}
        <div
          className="
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            pointer-events-none
            shadow-[0_0_25px_rgba(56,189,248,0.35)]
          "
        />

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="
            relative flex h-16 w-16 items-center justify-center rounded-xl 
            bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl 
          "
        >
          <Image src={icon} width={36} height={36} alt="feature icon" />
        </motion.div>

        {/* Title */}
        <h3
          className="
            mt-6 mb-3 text-xl font-semibold 
            text-black dark:text-white
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-black/80 dark:text-white/70 leading-relaxed text-sm">
          {description}
        </p>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            mt-5 h-[3px] rounded-full 
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
          "
        />
      </motion.div>
    </>
  );
};

export default SingleFeature;
