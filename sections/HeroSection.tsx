"use client";
import React from "react";
import Image from "@/public/images/Gymphoto.png";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/Utils/AnimatedText";

function HeroSection() {
  const { scrollY } = useScroll();

  const overlayOpacity = useTransform(scrollY, [0, 500], [0, 0.7]);
  return (
    <div className="w-full h-screen relative flex justify-center gap-12 items-center  bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-5"></div>
      <AnimatedText
        text="the bad workout the one that didn't happened"
        className="z-10 w-100 text-center font-anton text-8xl uppercase tracking-wider main-red md:text-10xl font-bold"
      />
      <span className="text-white z-10 w-[20%]">
        track your progress at workout, organize it, and control your calories
        all of that in only one website Fity
      </span>
      <img
        src={Image.src}
        className="absolute object-contain left-[20%] w-[60%] h-full"
        alt="Gym"
      />
      <motion.div
        className="absolute inset-0 bg-black z-20"
        style={{ opacity: overlayOpacity }}
        initial={{ opacity: 0 }}
      />
    </div>
  );
}

export default HeroSection;
