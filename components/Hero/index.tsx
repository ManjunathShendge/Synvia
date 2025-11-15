"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="overflow-hidden pb-24 pt-36 md:pt-40 xl:pb-32 xl:pt-48 relative">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          <div className="flex lg:items-center lg:gap-10 xl:gap-32">

            {/* LEFT CONTENT ANIMATED */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="md:w-1/2"
            >
              {/* Animated Gradient Title */}
              <motion.h1
                variants={fadeUp}
                className="
                  mb-6 
                  text-5xl md:text-6xl xl:text-7xl 
                  font-bold 
                  tracking-tight 
                  leading-tight
                  text-black dark:text-white
                "
              >
                Data That{" "}
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="
                    bg-gradient-to-r 
                    from-blue-500 via-purple-500 to-pink-500 
                    bg-clip-text 
                    text-transparent 
                    font-extrabold
                    inline-block
                  "
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Drives Growth
                </motion.span>
              </motion.h1>

              {/* Subtitle with underline animation */}
              <motion.h2
                variants={fadeUp}
                className="
                  relative inline-block
                  mb-7 text-2xl md:text-3xl font-medium 
                  text-black dark:text-white
                "
              >
                Stop wasting time on bad leads.
                <span className="absolute left-0 -bottom-1 h-[3px] w-full 
                  bg-gradient-to-r from-blue-500 to-purple-500 
                  animate-pulse"></span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="
                  text-lg 
                  text-black/70 dark:text-white/80 
                  max-w-xl leading-relaxed
                "
              >
                Access verified, real-time, high-intent US business data. 
                Scale smarter with accurate insights, enriched lead profiles, 
                and powerful tools tailored for fast-growing companies.
              </motion.p>

              {/* Email Input */}
              <motion.div variants={fadeUp} className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email"
                      className="
                        rounded-full border 
                        border-black/20 dark:border-white/20 
                        px-6 py-3 
                        bg-black/5 dark:bg-white/5 
                        backdrop-blur-xl 
                        focus:border-blue-500
                        text-black dark:text-white
                        placeholder-black/50 dark:placeholder-white/50
                        w-64
                      "
                    />

                    <button
                      aria-label="get started button"
                      className="
                        rounded-full px-8 py-3 
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white font-semibold 
                        hover:opacity-90 
                        transition
                      "
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE IMAGE WITH ANIMATIONS */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="hidden md:w-1/2 lg:block"
            >
              <div className="relative w-full aspect-700/444">
                <Image
                  src="/images/hero/Herosection-image.jpg"
                  alt="Hero"
                  fill
                  className="
                    object-cover rounded-3xl
                    drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]
                    dark:drop-shadow-[0_25px_40px_rgba(255,255,255,0.08)]
                  "
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bouncing Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-black/50 dark:text-white/60 text-sm"
          >
            ↓ Scroll
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
