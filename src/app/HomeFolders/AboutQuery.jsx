"use client";

import React, { useEffect, useRef } from "react";
import {
  BsQuestionCircle,
  BsPeopleFill,
  BsSearch,
  BsLightbulb,
} from "react-icons/bs";
import { motion } from "framer-motion";
import Title from "../Components/ReusableComponent/Title";

const features = [
  {
    icon: <BsQuestionCircle className="text-4xl" />,
    title: "Ask Anything",
    description: "Post your questions and get instant help from the community.",
    color: "text-indigo-600",
    bg: "bg-indigo-50/50 backdrop-blur-sm shadow-xl hover:bg-indigo-50",
    delay: 0.1,
  },
  {
    icon: <BsSearch className="text-4xl" />,
    title: "Smart Search",
    description:
      "Search thousands of verified answers with AI-powered filters.",
    color: "text-blue-600",
    bg: "bg-blue-50/50 hover:bg-blue-50 backdrop-blur-sm shadow-xl",
    delay: 0.2,
  },
  {
    icon: <BsPeopleFill className="text-4xl" />,
    title: "Community Driven",
    description: "A vibrant community that helps each other learn and grow.",
    color: "text-green-600",
    bg: "bg-green-50/50 hover:bg-green-50",
    delay: 0.3,
  },
  {
    icon: <BsLightbulb className="text-4xl" />,
    title: "Grow Knowledge",
    description: "Gain new knowledge every day by reading expert answers.",
    color: "text-yellow-600",
    bg: "bg-yellow-50/50 hover:bg-yellow-50",
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = (delay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

export default function AboutQuery() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 400;

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.5)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[400px] pointer-events-none z-0"
      />

      <div className="relative z-10">
        <Title
          title={"About AskZone"}
          description={"Where curiosity meets knowledge"}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.p
              variants={itemVariants(0.3)}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              AskZone is a smart Q&A platform designed to connect your questions
              with expert answers. Collaborate, learn, and grow with our
              community.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants(feature.delay)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${feature.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-white`}
              >
                <div
                  className={`${feature.color} mb-6 p-4 rounded-full bg-white shadow-sm ring-1 ring-gray-200/50`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
