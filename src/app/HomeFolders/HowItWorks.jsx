"use client";

import React from "react";
import { FiLogIn, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import Title from "../Components/ReusableComponent/Title";

const steps = [
  {
    icon: <FiLogIn className="text-3xl" />,
    title: "Login",
    description: "Create an account or sign in to get started",
    color: "text-error",
    border: "border-primary/20",
  },
  {
    icon: <FiMessageSquare className="text-3xl" />,
    title: "Ask Your Question",
    description: "Post your question to our knowledgeable community",
    color: "text-secondary",
    border: "border-secondary/20",
  },
  {
    icon: <FiCheckCircle className="text-3xl" />,
    title: "Get Answers",
    description: "Receive quality answers from experts and community members",
    color: "text-accent",
    border: "border-accent/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title
            title="How It Works"
            description="Get answers in just 3 simple steps"
            className="mb-6"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`card bg-base-200 ${step.border} p-8 rounded-box border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div
                className={`${step.color} mb-6 p-4 rounded-full bg-base-100  shadow-sm relative`}
              >
                {step.icon}
                <div className="absolute -top-2 -right-2 text-base-100 bg-error rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">
                {step.title}
              </h3>
              <p className="text-base-content/70">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center py-5">
          <button className="btn-lg btn btn-primary px-8 hover:scale-105 transition-transform">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
