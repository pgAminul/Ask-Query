"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Title from "../Components/ReusableComponent/Title";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    avatar: "/avatars/sarah-dev.jpg",
    content:
      "AskZone has completely transformed how I solve coding problems. The community is incredibly helpful and I get answers within hours!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Designer",
    avatar: "/avatars/michael-designer.jpg",
    content:
      "As a designer, I often need technical clarification. The experts here explain complex concepts in ways I can actually understand.",
    rating: 4,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Fullstack Engineer",
    avatar: "/avatars/priya-engineer.jpg",
    content:
      "I both ask and answer questions here. The reputation system motivates me to share knowledge while building my professional profile.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "DevOps Specialist",
    avatar: "/avatars/david-devops.jpg",
    content:
      "The quality of answers here surpasses other platforms. Moderators ensure only accurate solutions get promoted.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Wilson",
    role: "Product Manager",
    avatar: "/avatars/emily-pm.jpg",
    content:
      "When my team gets stuck, we often find solutions on AskZone. It has saved us countless hours of research.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title
            title="What Our Community Says"
            description="Hear from developers and professionals who use AskZone daily"
          />
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-full">
                <div className="min-h-[320px] h-full flex flex-col justify-between bg-base-200 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg italic text-white mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring-2 ring-primary ring-offset-2">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
