"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../common/ProductCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faHeart, faShoppingCart, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


type ProductType = {
  id: string;
  name: { en: string; ar: string };
  brand: string;
  price: number;
  currency: string;
  images: string[];
  ratings: { average: number; total_reviews: number };
  stock: number;
  discount?: number;
  description?: { en: string; ar: string };
};

const BestDeals = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60 * 1000); 

  const calculateTimeLeft = () => {
    if (timeLeft <= 0) return "00:00:00";

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const storedProducts = localStorage.getItem("selectedProducts");

        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
          console.log("📌 Using stored products:", JSON.parse(storedProducts));
          return;
        }

        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: ProductType[] = await res.json();
        console.log("✅ API Response:", data);

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format");
        }

        const selectedProducts = data.slice(0, 8); 
        console.log("📸 Selected Products:", selectedProducts);

        localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
        setProducts(selectedProducts);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <motion.section 
      className="py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
      
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8 border-b border-gray-200 pb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
              🔥 Best Deals
            </h1>
            <div className="flex items-center gap-2 bg-warning-100 text-warning-700 px-4 py-2 rounded-md shadow-sm">
              <FontAwesomeIcon icon={faClock} className="text-warning-700 w-5 h-5" />
              <span className="font-semibold text-lg">{calculateTimeLeft()}</span>
            </div>
          </div>
          <Link
            href="/shopPage"
            className="text-primary-600 font-medium flex items-center gap-2 text-lg hover:text-primary-500 transition duration-300"
          >
            Browse All Products
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </motion.div>


        <div className="flex flex-col lg:flex-row gap-6">
         
          <motion.div 
            className="hidden lg:flex flex-col gap-4 lg:w-1/4 flex-shrink-0 border border-gray-100 p-4 rounded-lg shadow-md relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/playstations/Image(19).png"
              alt="Best Deals"
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <p className="text-center text-gray-500 mt-2">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version
            </p>
            <div className="mt-2 text-warning-500 text-lg">⭐⭐⭐⭐⭐</div>
            <span className="text-secondary-500 font-bold text-lg block mt-2">$442.12</span>

            
              <div className="flex justify-center gap-4 mt-4">
              
              <Link href="/wishlist">
                <div className="group w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full hover:bg-primary-500 transition duration-300 transform hover:scale-105 relative">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-600 group-hover:text-white w-5 h-5"
                  />
                  <span className="absolute top-12 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                    Add to Wishlist
                  </span>
                </div>
              </Link>

              
              <Link href="/shoppingCart">
                <div className="group w-12 h-12 flex justify-center items-center bg-primary-500 rounded-full hover:bg-primary-400 transition duration-300 transform hover:scale-105 relative">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-white w-6 h-6"
                  />
                  <span className="absolute top-12 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                    Add to Cart
                  </span>
                </div>
              </Link>

           
              <Link href="/wishList">
                <div className="group w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full hover:bg-primary-500 transition duration-300 transform hover:scale-105 relative">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-gray-600 group-hover:text-white w-5 h-5"
                  />
                  <span className="absolute top-12 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                    View Product
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>

        
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-grow gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-4">Loading products...</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BestDeals;
