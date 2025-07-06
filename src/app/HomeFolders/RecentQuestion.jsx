import React from "react";
import Title from "../Components/ReusableComponent/Title";
import { FiMessageSquare, FiArrowRight, FiClock } from "react-icons/fi";

const recentQuestions = [
  {
    id: 1,
    title: "How to optimize React performance in large applications?",
    category: "React",
    answers: 12,
    time: "2 hours ago",
    user: {
      name: "Sarah Dev",
      avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    },
  },
  {
    id: 2,
    title: "Best practices for authentication in Next.js 14?",
    category: "Next.js",
    answers: 8,
    time: "5 hours ago",
    user: {
      name: "Mike Codes",
      avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    },
  },
  {
    id: 3,
    title: "Tailwind CSS vs Styled Components - which to choose?",
    category: "CSS",
    answers: 15,
    time: "1 day ago",
    user: {
      name: "Priya Styles",
      avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    },
  },
  {
    id: 4,
    title: "Implementing dark mode with CSS variables",
    category: "CSS",
    answers: 6,
    time: "1 day ago",
    user: {
      name: "Alex Designer",
      avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    },
  },
  {
    id: 5,
    title: "State management options for React in 2024",
    category: "React",
    answers: 10,
    time: "2 days ago",
    user: {
      name: "Jordan State",
      avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    },
  },
  {
    id: 6,
    title: "Deploying Node.js apps to AWS Lambda",
    category: "DevOps",
    answers: 4,
    time: "3 days ago",
    user: {
      name: "Taylor Ops",
      avatar: "https://i.ibb.co/wW93yy6/myimg.jpg",
    },
  },
];

export default function RecentQuestions() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title
            title="Recent Questions"
            description="Latest discussions from our community"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentQuestions.map((question) => (
            <div key={question.id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative card bg-base-200 hover:bg-base-300 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="bg-error/10 p-3 rounded-lg">
                      <FiMessageSquare className="text-error text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white/75 line-clamp-2">
                        {question.title}
                      </h3>
                      <div className="badge badge-outline text-white/75 badge-sm mt-2">
                        {question.category}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img
                            src={question.user.avatar}
                            alt={question.user.name}
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-yellow-200">
                        {question.user.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-base-content/70">
                        <FiClock className="text-base-content/50" />
                        <span>{question.time}</span>
                      </div>
                      <div className="badge badge-primary">
                        {question.answers} answers
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 card-actions justify-end">
                    <button className="text-red-300 flex justify-between items-center cursor-pointer">
                      View discussion
                      <FiArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-5 text-center">
          <button className="btn btn-outline btn-primary">
            Browse All Questions
          </button>
        </div>
      </div>
    </section>
  );
}
