"use client";

import React from "react";
import Title from "../Components/ReusableComponent/Title";
import Image from "next/image";
import { FaCrown, FaTrophy, FaAward } from "react-icons/fa";

const topUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Expert Contributor",
    points: 5240,
    avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    badge: <FaCrown className="text-yellow-400 text-2xl" />,
    rank: 1,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Community Leader",
    points: 4875,
    avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    badge: <FaTrophy className="text-gray-300 text-2xl" />,
    rank: 2,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Top Answerer",
    points: 4520,
    avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    badge: <FaTrophy className="text-amber-600 text-2xl" />,
    rank: 3,
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Knowledge Partner",
    points: 3980,
    avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    badge: <FaAward className="text-blue-400 text-2xl" />,
    rank: 4,
  },
  {
    id: 5,
    name: "David Kim",
    role: "Solution Expert",
    points: 3650,
    avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    badge: <FaAward className="text-green-400 text-2xl" />,
    rank: 5,
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Community Helper",
    points: 3420,
    avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    badge: <FaAward className="text-purple-400 text-2xl" />,
    rank: 6,
  },
];

export default function TopUsers() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Top Contributors"
          description="Our most active community members"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topUsers.map((user) => (
            <div key={user.id} className="group relative">
              {/* Glowing border on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>

              {/* Card */}
              <div className="relative card bg-black border border-base-300 shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="card-body items-center text-center space-y-4">
                  <div className="relative">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Badge icon */}
                    <div className="absolute -top-3 -right-3 animate-bounce hover:animate-none ">
                      {user.badge}
                    </div>

                    {/* Rank */}
                    <div className="absolute -bottom-2 -right-2 badge badge-primary badge-lg ">
                      #{user.rank}
                    </div>
                  </div>

                  {/* User info */}
                  <h3 className="text-xl text-white font-bold">{user.name}</h3>
                  <p className="text-sm text-base-content/70">{user.role}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-primary">
                      {user.points.toLocaleString()}
                    </span>
                    <span className="text-sm text-base-content/50">points</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="py-4 mt-3 text-center">
          <button className="btn btn-primary btn-lg px-8 animate-bounce hover:animate-none">
            View All Contributors
          </button>
        </div>
      </div>
    </section>
  );
}
