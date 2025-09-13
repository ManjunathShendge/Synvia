"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="max-w-c-1390 dark:bg-blacksection dark:stroke-strokedark relative z-1 mx-auto rounded-lg bg-linear-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 xl:py-27.5 dark:bg-linear-to-t dark:from-transparent dark:to-transparent">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -top-25 -left-15 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute right-0 bottom-0 -z-1"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
              Trusted by Ambition & Innovation
            </h2>
            <p className="mx-auto lg:w-11/12">
              At SYNVIA, we’re passionate about helping businesses grow through
              cutting-edge digital marketing and web development solutions.
              We’re ready to partner with you to build your success story.
            </p>
          </motion.div>
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-12 text-center shadow-xl dark:bg-gray-800">
            <h3 className="mb-8 text-3xl font-bold text-black dark:text-indigo-400">
              Our Commitment
            </h3>
            <ol className="list-inside list-decimal space-y-6 text-left text-lg font-medium text-gray-700 dark:text-gray-300">
              <li>Delivering high-quality, custom solutions.</li>
              <li>Embracing the latest tech and AI tools.</li>
              <li>Focusing on measurable results and growth.</li>
            </ol>
            <button className="mt-10 rounded-lg bg-indigo-300 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-500">
              Join us on our journey to make a difference!
            </button>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
