"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../Components/ReusableComponent/Title";
import {
  FaQuestionCircle,
  FaLightbulb,
  FaBook,
  FaUsers,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const popularTopics = [
  {
    icon: <FaQuestionCircle className="text-primary" size={32} />,
    name: "Getting Started",
  },
  {
    icon: <FaLightbulb className="text-yellow-500" size={32} />,
    name: "Tips & Tricks",
  },
  {
    icon: <FaBook className="text-blue-500" size={32} />,
    name: "Best Practices",
  },
  {
    icon: <FaUsers className="text-green-500" size={32} />,
    name: "Community Help",
  },
  {
    icon: <FaSearch className="text-purple-500" size={32} />,
    name: "Troubleshooting",
  },
  {
    icon: <FaChartLine className="text-red-500" size={32} />,
    name: "Trending Topics",
  },
  {
    icon: <FaQuestionCircle className="text-secondary" size={32} />,
    name: "Advanced Q&A",
  },
];

export default function PopularTopics() {
  return (
    <section className="">
      <div className="">
        <div className="text-center mb-12">
          <Title
            title="Popular Topics"
            description="Discover what our community is discussing most"
          />
        </div>

        <div className="relative group">
          <Marquee
            autoFill={true}
            speed={40}
            direction="right"
            pauseOnHover={true}
            gradient={true}
            gradientColor="hsl(var(--b1))"
            gradientWidth={100}
          >
            {popularTopics.map((topic, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-6 px-6 py-5 bg-base-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="mb-3">{topic.icon}</div>
                <h4 className="font-semibold text-white text-lg mb-1">
                  {topic.name}
                </h4>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-12 text-center"></div>
      </div>
    </section>
  );
}
