import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Khan",
    designation: "Founder & CEO, BrightWave Solutions",
    image: image1,
    content:
      "SYNVIA transformed our online presence with a sleek, responsive website and smart marketing strategies. Their team truly understands the power of digital.",
  },
  {
    id: 2,
    name: "Ravi Patel",
    designation: "Marketing Head, TechNova Inc.",
    image: image2,
    content:
      "The AI-powered automation tools delivered by SYNVIA helped us save countless hours and improved our customer engagement significantly.",
  },
  {
    id: 3,
    name: "Sara Lee",
    designation: "Entrepreneur, ShopEase",
    image: image1,
    content:
      "Working with SYNVIA was seamless—they built a customized e-commerce platform that perfectly matched our brand and boosted our sales.",
  },
  {
    id: 4,
    name: "Mark Wilson",
    designation: "Product Manager, InnovateX",
    image: image2,
    content:
      "From SEO to social media marketing, SYNVIA’s expertise helped our startup gain traction and reach a wider audience quickly.",
  },
];
