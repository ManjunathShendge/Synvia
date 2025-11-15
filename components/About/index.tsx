"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  return (
    <>
      {/* ===== About Start ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* LEFT CONTENT (TEXT) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <span className="font-medium text-black uppercase dark:text-white">
                <span className="mr-4 pb-4 inline-block bg-gradient-to-r from-[#0062ff] to-[#7600e4] bg-clip-text text-4xl text-transparent uppercase">
                  Verified US Business Data
                </span>
              </span>

              <h2 className="xl:text-hero relative mb-6 text-4xl font-bold text-black dark:text-white">
                High-Quality Leads That Actually Convert
              </h2>

              <p>
                Get instant access to 100% verified and up-to-date US business
                and consumer data. Improve targeting effectiveness, increase
                conversions, and drive consistent revenue with data you can
                trust.
              </p>

              {/* Feature 1 */}
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    100% Verified & Fresh Data
                  </h3>
                  <p>
                    Every contact is validated using advanced verification
                    systems to ensure accuracy and deliverability.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Target Any Industry or Audience
                  </h3>
                  <p>
                    Get precise, segmented datasets for B2B, B2C, healthcare,
                    real estate, tech, finance, and more.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT LOTTIE (ANIMATION) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <DotLottieReact
                src="https://lottie.host/14b846c5-ea3e-4ce4-ba71-33b7abe46114/AnswgceK0c.lottie"
                loop
                autoplay
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About End ===== */}

      {/* ===== About Start ===== */}
      <section className="overflow-hidden pt-5 pb-10">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* LEFT LOTTIE */}

            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <DotLottieReact
                src="https://lottie.host/61f23f9f-d67d-4919-b135-193f6d5d6a0e/CcG1USdjg2.lottie"
                loop
                autoplay
                className="h-full w-full"
              />
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium text-black uppercase dark:text-white">
                <span className="bg-meta text-metatitle mr-4 mb-4 inline-flex rounded-full px-4.5 py-1 text-white uppercase">
                  New
                </span>{" "}
                <span className="mr-4 pb-4 inline-block bg-gradient-to-r from-[#0062ff] to-[#7600e4] bg-clip-text text-4xl text-transparent uppercase">
                  RPA Solutions for Your Business
                </span>{" "}
              </span>

              <h2 className="xl:text-hero relative mb-6 text-4xl font-bold text-black dark:text-white">
                Automate Your Workflows Efficiently
              </h2>

              <p>
                Streamline your repetitive tasks and boost productivity with
                smart, intuitive automation.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Cutting-Edge RPA Technology
                  </h3>
                  <p>
                    Reduce manual work and eliminate errors with advanced
                    automation.
                  </p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Fully Customizable Workflows
                  </h3>
                  <p>
                    Designed to adapt to your business—not the other way around.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About End ===== */}

      {/* ===== About Two Start ===== */}

      <section>
        <div className="max-w-c-1235 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* LEFT TEXT */}

            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
                <span className="mr-4 pb-4 inline-block bg-gradient-to-r from-[#0062ff] to-[#7600e4] bg-clip-text text-4xl text-transparent uppercase">
                Launch Your Website Fast
              </span>

              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Packed with All Essential Tools
              </h2>

              <p>
                Build responsive, SEO-friendly websites with everything you need
                to go live fast.
              </p>

              <a
                href="#"
                className="group hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5 text-black dark:text-white"
              >
                <span className="duration-300 group-hover:pr-2">Know More</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </a>
            </motion.div>

            {/* RIGHT LOTTIE (UPDATED) */}

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <DotLottieReact
                src="https://lottie.host/41173d66-21c3-483b-ae36-7b78c8f88a55/QiXKheufSh.lottie"
                loop
                autoplay
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== About Two End ===== */}
    </>
  );
};

export default About;
