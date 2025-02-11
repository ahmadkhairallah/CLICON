"use client";

import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const LargeBanner = () => {
  return (
    <section className="bg-primary-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-10">
        <div className="flex flex-col gap-4 justify-center">
          <div className="bg-secondary-500 text-white px-4 py-1 w-fit rounded-md text-sm font-semibold shadow-md">
            SAVE UP TO $200.00
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            CASIO Classic Elegance
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Discover timeless sophistication with the Casio watch – a perfect
            blend of precision, durability, and sleek design, crafted for every
            occasion.
          </p>

          <Link
            href="/shopPage"
            className="flex items-center gap-2 w-fit bg-primary-500 text-white px-4 md:px-6 py-2 rounded-md hover:bg-primary-600 transition duration-300 shadow-md"
          >
            SHOP NOW
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>

        {/* ✅ استبدال المجسم الثلاثي الأبعاد بصورة ثابتة للساعة */}
        <motion.div
          className="relative w-3/4 md:w-1/3 lg:w-1/4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/headphones/Image(16).png" // ضع المسار الصحيح لصورة الساعة
            alt="Casio Classic Elegance"
            width={500}
            height={500}
            className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LargeBanner;
