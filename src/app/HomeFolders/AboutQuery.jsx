"use client";

import React from "react";
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
    bg: "bg-indigo-50/50 hover:bg-indigo-50",
    delay: 0.1,
  },
  {
    icon: <BsSearch className="text-4xl" />,
    title: "Smart Search",
    description:
      "Search thousands of verified answers with AI-powered filters.",
    color: "text-blue-600",
    bg: "bg-blue-50/50 hover:bg-blue-50",
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
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white  px-4 sm:px-6 lg:px-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          {/* <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
            Join Our Community
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
