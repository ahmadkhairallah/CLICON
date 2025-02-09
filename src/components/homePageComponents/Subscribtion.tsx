"use client";

import { useState, useEffect } from "react";

const BrandsImages = [
  { src: "/images/icons/google-2015 1.png", link: "https://www.google.com" },
  { src: "/images/icons/philips 1.png", link: "https://www.philips.com" },
  { src: "/images/icons/samsung-4 1.png", link: "https://www.samsung.com" },
  { src: "/images/icons/toshiba-1 1.png", link: "https://www.toshiba.com" },
  { src: "/images/icons/Frame.png", link: "https://www.amazon.com" },
];

const Subscribtion = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

 
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="bg-secondary-700 py-12 w-full">
      <div className="flex flex-col items-center text-center gap-8 px-4 md:px-10">
        
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight animate-fade-in">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto animate-fade-in delay-200">
            Stay up to date with the latest news and offers from our online
            store.
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-gray-700 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300 shadow-sm"
          />
          <button
            onClick={handleSubscribe}
            className="bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition duration-300 shadow-md w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>

      
        {status === "success" && (
          <p className="text-green-400 text-sm animate-fade-in">
            ✅ Subscribed successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm animate-fade-in">
            ⚠️ Please enter a valid email.
          </p>
        )}

        
        <div className="flex flex-wrap justify-center gap-6 mt-6 animate-fade-in delay-400 w-full">
          {BrandsImages.map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={brand.src}
                alt={`Brand ${index + 1}`}
                className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscribtion;
