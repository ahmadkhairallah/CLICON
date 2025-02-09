"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SliderCard from "../common/SliderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


type ProductType = {
  id: string;
  brand: string;
  images: string[];
};

const ProductsSlider = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

 
  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data: ProductType[] = await res.json();
        setProducts([...data.slice(0, 10)]);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="pb-10 mt-10">
      <div className="container mx-auto relative overflow-hidden">
       
        <div className="flex justify-start items-center gap-3 mb-8">
          <FontAwesomeIcon
            icon={faStar}
            className="text-primary-600 w-6 h-6 md:w-7 md:h-7"
          />
          <h2
            className="
              text-xl md:text-3xl font-bold text-gray-800 
              relative after:absolute after:content-[''] 
              after:w-10 after:h-1 after:bg-gradient-to-r 
              after:from-primary-500 after:to-primary-300 after:rounded-full
              after:left-1/2 after:-translate-x-1/2 after:-bottom-2 text-center
            "
          >
            Top Brands
          </h2>
        </div>

        
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 flex-nowrap whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"], 
            }}
            transition={{
              ease: "linear",
              duration: 80, 
              repeat: Infinity, 
            }}
          >
            {[...products, ...products].map((product, index) => (
              <SliderCard key={index} product={product} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
