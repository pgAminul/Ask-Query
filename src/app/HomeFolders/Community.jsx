"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Components/ReusableComponent/Title";
import Image from "next/image";
import community from "../../../public/community.jpg";
export default function Community() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <Image
          src={community} // Replace with your image
          alt="Community background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Content Card with Inverse Parallax */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        style={{ y: yText }}
      >
        <div className="card bg-white/50 backdrop-blur-sm shadow-xl max-w-2xl mx-4 p-8 sm:p-10">
          <div className="text-center">
            <Title
              title="Join Our Growing Community"
              description="Connect with experts and enthusiasts"
              className="mb-6"
            />
            <p className="text-lg mb-8">
              AskZone brings together thousands of curious minds. Get instant
              help, share your knowledge, and grow together in our vibrant
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary px-8">Ask a Question</button>
              <button className="btn btn-outline px-8">Browse Topics</button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
