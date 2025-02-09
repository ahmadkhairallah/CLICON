"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faShoppingCart,
  faHeart,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
  return (
    <header className="shadow-sm border-b">
      {/* Top Bar */}
      <div className="hidden md:flex bg-secondary-700 text-sm py-2 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="font-medium hidden md:block min-w-[300px]">
            Welcome to CLICON online eCommerce store.
          </p>
          <div className="flex justify-between md:justify-end w-full items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-2">
              <a href="#" >
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-lg hover:text-primary-500 transition" />
              </a>
              <a href="#" >
                <FontAwesomeIcon icon={faTwitter} className="text-white text-lg hover:text-primary-500 transition" />
              </a>
              <a href="#" >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-lg hover:text-primary-500 transition" />
              </a>
              <a href="#" >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-lg hover:text-primary-500 transition" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} className="text-white text-lg hover:text-primary-500 transition" />
              </a>
            </div>

            <div className="flex items-center">
              {/* Language Dropdown */}
              <div>
                <select className="bg-secondary-700 px-2 py-1 cursor-pointer hover:text-primary-500 duration-300">
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                </select>
              </div>

              {/* Currency Dropdown */}
              <div>
                <select className="bg-secondary-700 px-2 py-1 cursor-pointer hover:text-primary-500 duration-300">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="SAR">SAR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="bg-secondary-700 py-3 text-white ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
            >
              <Image
                src="/images/logo/Icon(1).png"
                alt="CLICON Logo"
                fill
                sizes="(max-width: 768px) 40px, (max-width: 1024px) 50px, 60px"
                priority
                className="object-contain"
              />
            </Link>

            <Link
              href="/"
              className="relative w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] "
            >
              <Image
                src="/images/logo/CLICON.png"
                alt="CLICON Logo"
                fill
                
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 mx-4 ">
            <form>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="
                    w-full 
                    border border-gray-300 
                    rounded-l-md 
                    pl-3 pr-8 py-2
                    focus:outline-none 
                    focus:border-primary-500 
                    focus:ring-1 
                    focus:ring-primary-500 
                    transition 
                    duration-200
                    text-gray-900
                  "
                />
                <button
                  type="submit"
                  className="
                    absolute right-0 top-0 bottom-0 
                    bg-primary-500 text-white 
                    px-4 
                    rounded-l-md 
                    hover:bg-primary-600
                    transition 
                    duration-200
                  "
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Icons (Cart, Wishlist, User) */}
          <div className="flex items-center gap-4">
            <Link
              href="/shoppingCard"
              className="relative hover:text-primary-500"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-white text-lg hover:text-primary-500 transition" />
              <span className="absolute text-xs bg-danger-500 text-white px-1 rounded-full -top-2 -right-2">
                2
              </span>
            </Link>
            <Link href="/wishList" >
              <FontAwesomeIcon icon={faHeart} className="text-white text-lg hover:text-primary-500 transition" />
            </Link>
            <Link href="/signIn" >
              <FontAwesomeIcon icon={faUser} className="text-white text-lg hover:text-primary-500 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="hidden md:flex bg-gray-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/shopPage"
                className="
            inline-flex items-center
            px-3 py-2
            text-gray-700
            hover:bg-gray-100
            hover:text-gray-800
            transition duration-200
            rounded
            whitespace-nowrap   /* يمنع النص من الانكسار */
          "
              >
                All Categories
                <Image
                  src="/images/icons/CaretDown.png"
                  alt="CLICON Logo"
                  width={10}
                  height={10}
                  className="inline-block ml-1"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/trackOrder"
                className="
            inline-flex items-center
            px-3 py-2
            text-gray-700
             hover:bg-gray-100
            hover:text-gray-800
            transition duration-200
            rounded
            whitespace-nowrap
          "
              >
                <Image
                  src="/images/icons/MapPinLine.png"
                  alt="CLICON Logo"
                  width={20}
                  height={20}
                  className="inline-block mr-1"
                />
                Track Order
              </Link>
            </li>
            <li>
              <Link
                href="/compare"
                className="
            inline-flex items-center
            px-3 py-2
            text-gray-700
            hover:bg-gray-100 
            hover:text-gray-800
            transition duration-200
            rounded
            whitespace-nowrap
          "
              >
                <Image
                  src="/images/icons/ArrowsCounterClockwise.png"
                  alt="CLICON Logo"
                  width={20}
                  height={20}
                  className="inline-block mr-1"
                />
                Compare
              </Link>
            </li>
            <li>
              <Link
                href="/customerSupport"
                className="
            inline-flex items-center
            px-3 py-2
            text-gray-700
            hover:bg-gray-100
            hover:text-gray-800
            transition duration-200
            rounded
            whitespace-nowrap
          "
              >
                <Image
                  src="/images/icons/Headphones.png"
                  alt="CLICON Logo"
                  width={20}
                  height={20}
                  className="inline-block mr-1"
                />
                Customer Support
              </Link>
            </li>
            <li>
              <Link
                href="/needHelp"
                className="
            inline-flex items-center
            px-3 py-2
            text-gray-700
            hover:bg-gray-100
            hover:text-gray-800
            transition duration-200
            rounded
            whitespace-nowrap
          "
              >
                <Image
                  src="/images/icons/Info.png"
                  alt="CLICON Logo"
                  width={20}
                  height={20}
                  className="inline-block mr-1"
                />
                Need Help
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-primary-500 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
