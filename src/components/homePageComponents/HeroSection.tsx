"use client";

import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Image from "next/image";
import { useRef } from "react";
import * as THREE from "three";


const AppleHeadModel = () => {
  const gltf = useGLTF("/images/headphones/Apple_Head.glb");
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; 
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1} position={[0, -0.5, 0]} />;
};


const MacMiniModel = () => {
  const gltf = useGLTF("/images/smartphones/Macmini.glb");
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.01; 
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1.2} position={[0, -0.5, 0]} />;
};

const HeroSection = () => {
  return (
    <section className="pb-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
   
        <motion.div
          className="flex gap-4 items-center bg-gray-50 p-4 md:p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            <p className="text-secondary-500 font-bold text-sm md:text-lg">THE BEST PLACE TO PLAY</p>
            <h1 className="font-bold text-lg md:text-2xl lg:text-3xl leading-tight">Apple Pro</h1>
            <p className="text-gray-600 lg:max-w-xs text-sm md:text-base">Next-gen immersive audio experience.</p>
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

          <motion.div
            className="w-2/3 h-48 md:h-60 lg:h-72"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight position={[2, 2, 5]} intensity={1} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
              <AppleHeadModel />
            </Canvas>
          </motion.div>
        </motion.div>

        
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
                fill
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>

          
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
              <Canvas>
                <ambientLight intensity={2} /> 
                <directionalLight position={[3, 3, 5]} intensity={2} /> 
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
                <MacMiniModel />
              </Canvas>
            </motion.div>

            <div className="flex flex-col gap-3 text-start">
              <h1 className="text-gray-900 font-bold text-lg md:text-xl">Mac Mini 2024</h1>
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
