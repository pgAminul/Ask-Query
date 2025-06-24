"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// https://i.ibb.co/93TTMMNP/slide1.png
// https://i.ibb.co/jZbxVB30/slide-2.jpg
// https://i.ibb.co/F4TD8jTS/slide-3.jpg
// https://i.ibb.co/ZpWMhSZs/slide-4.jpg
// https://i.ibb.co/s9Dj5z91/slide-5.jpg
// https://i.ibb.co/LhdZ0y38/slide-6.webp

const slides = [
  {
    image: "https://i.ibb.co/F4TD8jTS/slide-3.jpg",
    title: "Ask Anything",
    subtitle: "Your questions, our answers. Instantly.",
  },
  {
    image: "https://i.ibb.co/LhdZ0y38/slide-6.webp",
    title: "Powered by Knowledge",
    subtitle: "Dive into reliable, AI-assisted insights.",
  },
  {
    image: "https://i.ibb.co/ZpWMhSZs/slide-4.jpg",
    title: "Explore Curiosity",
    subtitle: "Search. Learn. Grow.",
  },
];

export default function KnowledgeSlider() {
  return (
    <div className="w-full h-[80vh] md:h-[90vh] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-white text-center p-6">
                <h1 className="text-3xl lg:text-6xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
