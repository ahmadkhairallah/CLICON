"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../common/ProductCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";


type ProductType = {
  id: string;
  name: { en: string; ar: string };
  brand: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  ratings: { average: number; total_reviews: number };
  stock: number;
  discount?: number;
  description?: { en: string; ar: string };
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const pageSize = 6;


  const categories = [
    "All Products",
    "Cameras",
    "Computers",
    "Headphones",
    "Drones",
    "Keyboards",
  ];

  
  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);


  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  
  const startIndex = (currentPage - 1) * pageSize;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col gap-6 text-center">
        
        <div className="mb-6 border-b border-gray-200 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
           
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faStar}
                className="text-primary-500 w-6 h-6"
              />
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                Featured Products
              </h2>
            </div>
           
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Link
                href="/shopPage"
                className="text-primary-600 font-medium hover:underline transition-colors duration-300"
              >
                Browse All Products
              </Link>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 text-primary-600"
              />
            </div>
          </div>

          
          <ul className="flex flex-wrap items-center justify-center gap-4 mt-4">
            {categories.map((cat, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative group text-sm transition-transform duration-300 ${
                    selectedCategory === cat
                      ? "text-primary-500 font-bold"
                      : "text-gray-600"
                  } hover:scale-105`}
                >
                  {cat}
                  {/* <span className="absolute left-0 bottom-[-2px] h-0.5 w-0 bg-primary-500 transition-all duration-300 group-hover:w-full"></span> */}
                </button>
              </li>
            ))}
          </ul>
        </div>

     
        <div className="flex-1">
          <div className="flex gap-6">
        
            <div className="bg-warning-300 hidden lg:flex flex-col ">
              <div className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-danger-600 uppercase tracking-wider">
                  Computer & Accessories
                </p>
                <h1 className="font-bold text-2xl">32% Discount</h1>
                <p className="text-gray-700">For all electronics products</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-gray-600 text-sm">Offers End In:</span>
                <span className="bg-warning-400  p-2 text-sm rounded-md">
                  Ends at Christmas
                </span>
              </div>
              <Link
                href="/shopPage"
                className="bg-primary-500 text-white font-semibold p-2 rounded-md flex items-center justify-center gap-2 hover:bg-primary-400 transition-all duration-300"
              >
                Shop Now
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              </div>
              <div className="">
                <Image
                  src="/images/miscellaneous/Image.jpg"
                  alt="Featured Offer"
                  width={100}
                  height={100}
                  className="w-full h-[300px] object-cover "
                />
              </div>
            </div>

            
            {isLoading ? (
              <p className="text-center text-gray-500">Loading products...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-grow gap-4 h-fit">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

         
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full shadow-md hover:bg-primary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-lg">&larr;</span>
              <span className="text-sm font-medium">Previous</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Page</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-bold">
                {currentPage}
              </span>
              <span className="text-gray-700 font-medium">of</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-bold">
                {totalPages}
              </span>
            </div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full shadow-md hover:bg-primary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-medium">Next</span>
              <span className="text-lg">&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
