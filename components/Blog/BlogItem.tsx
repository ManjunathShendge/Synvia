"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="
          animate_top 
          rounded-xl 
          p-5 
          pb-8 
          shadow-lg
          bg-white dark:bg-[#0d0f1a]
          border border-black/10 dark:border-white/10
          hover:border-transparent
          hover:shadow-[0_0_25px_rgba(0,0,0,0.12)]
          dark:hover:shadow-[0_0_30px_rgba(137,87,255,0.25)]
          transition-all duration-300
        "
      >
        {/* IMAGE WRAPPER */}
        <Link 
          href={`/blog/`} 
          className="
            relative block aspect-368/239 overflow-hidden rounded-lg 
            hover:scale-[1.02] transition-transform duration-300
          "
        >
          <Image 
            src={mainImage} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </Link>

        {/* CONTENT */}
        <div className="px-2 mt-6">
          
          {/* TITLE */}
          <h3
            className="mb-3 line-clamp-2 text-xl font-semibold 
            text-black dark:text-white
            hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text
            transition-all duration-300 cursor-pointer
          "
          >
            <Link href={`/blog/blog-details`}>
              {title.length > 40 ? `${title.slice(0, 40)}...` : title}
            </Link>
          </h3>

          {/* METADATA / DESCRIPTION */}
          <p className="line-clamp-3 text-black/70 dark:text-white/60 text-sm leading-relaxed">
            {metadata}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
