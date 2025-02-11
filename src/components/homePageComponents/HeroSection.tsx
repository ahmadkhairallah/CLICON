"use client";

import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pb-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        
        {/* ✅ أول قسم: Apple Pro */}
        <motion.div
          className="flex gap-4 items-center bg-gray-50 p-4 md:p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            <p className="text-secondary-500 font-bold text-sm md:text-lg">
              THE BEST PLACE TO PLAY
            </p>
            <h1 className="font-bold text-lg md:text-2xl lg:text-3xl leading-tight">
              Apple Pro
            </h1>
            <p className="text-gray-600 lg:max-w-xs text-sm md:text-base">
              Next-gen immersive audio experience.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/productsDetails"
                className="inline-flex items-center justify-center bg-primary-500 text-white py-2 px-4 w-fit font-semibold rounded shadow-md hover:bg-primary-600 transition duration-200 text-sm md:text-base"
              >
                SHOP NOW
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* ✅ استبدال المجسم بصورة منتج */}
          <motion.div
            className="w-2/3 h-48 md:h-60 lg:h-72"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src="/images/playstations/Image(19).png" 
              alt="Apple Pro"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* ✅ ثاني قسم: Google Pixel */}
        <motion.div
          className="flex flex-col gap-4 md:gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-gray-900 flex justify-between items-center p-4 md:p-6 rounded-lg shadow-md relative">
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-warning-500 font-semibold">SUMMER SALE</p>
              <h1 className="text-gray-100 font-bold text-lg xl:text-2xl max-w-32 lg:max-w-xs">
                New Google Pixel 7 Pro
              </h1>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/productsDetails"
                  className="inline-flex items-center justify-center bg-primary-500 text-white py-2 px-4 w-fit font-semibold rounded shadow-md hover:bg-primary-600 transition duration-200 text-sm md:text-base"
                >
                  SHOP NOW
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </motion.div>
            </div>

            {/* ✅ استبدال المجسم بصورة الهاتف */}
            <motion.div
              className="absolute bottom-0 right-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/images/smartphones/image 5(1).png"
                alt="Google Pixel 7 Pro"
                width={150}
                height={150}
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ✅ ثالث قسم: Mac Mini */}
        <motion.div
          className="bg-gray-50 flex justify-between items-center p-4 md:p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="w-1/2 h-48"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src="/images/headphones/Image(14).png" 
              alt="Mac Mini 2024"
              width={250}
              height={250}
              className="object-contain"
            />
          </motion.div>

          <div className="flex flex-col gap-3 text-start">
            <h1 className="text-gray-900 font-bold text-lg md:text-xl">
              Mac Mini 2024
            </h1>
            <span className="text-secondary-500 font-bold">$1199 USD</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/productsDetails"
                className="inline-flex items-center justify-center bg-primary-500 text-white py-2 px-4 w-fit font-semibold rounded shadow-md hover:bg-primary-600 transition duration-200 text-sm md:text-base"
              >
                SHOP NOW
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
