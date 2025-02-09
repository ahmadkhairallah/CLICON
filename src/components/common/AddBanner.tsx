"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 

interface AddBannerProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const AddBanner: React.FC<AddBannerProps> = ({ id, title, description, image }) => {
  
  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-4 shadow-md bg-gray-100 px-6 py-4 rounded-md"
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible" 
      whileHover="hover"    
      viewport={{ once: true, amount: 0.2 }} 
    >
      
      <div className="md:w-1/2 flex flex-col gap-4">
        <motion.span
          className="bg-secondary-500 text-white text-sm w-fit rounded-md font-semibold px-3 py-1"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          INTRODUCING
        </motion.span>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href={`/shopPage/${id}`}
            className="bg-primary-500 text-white px-4 py-2 w-fit rounded-md hover:bg-primary-600 transition duration-300 ease-in-out"
          >
            Shop Now
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </motion.div>
      </div>

    
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-cover rounded-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default AddBanner;
