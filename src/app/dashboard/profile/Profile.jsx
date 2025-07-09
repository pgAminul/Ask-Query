"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProfessionalProfilePage() {
  const canvasRef = useRef(null);

  // User data
  const user = {
    name: "Abdullah Al Mamun",
    title: "Senior Software Engineer",
    email: "mamun@example.com",
    phone: "+880 1711-223344",
    location: "Dhaka, Bangladesh",
    bio: "Full-stack developer with 5+ years of experience building scalable web applications using modern JavaScript frameworks and cloud technologies.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "AWS",
      "MongoDB",
      "GraphQL",
    ],
    experience: [
      {
        role: "Lead Developer",
        company: "TechSolutions BD",
        period: "2021 - Present",
      },
      {
        role: "Software Engineer",
        company: "Digital Bangla",
        period: "2019 - 2021",
      },
    ],
    education: {
      degree: "BSc in Computer Science",
      university: "Dhaka University",
      year: "2018",
    },
  };

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let dots = [];

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Create black dots (like rain)
      const dotCount = Math.floor((canvas.width * canvas.height) / 900);
      dots = Array.from({ length: dotCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 3 + 2,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update dots
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${dot.opacity})`;
        ctx.fill();

        // Move dots downward
        dot.y += dot.speed;

        // Reset dots at top when they fall off bottom
        if (dot.y > canvas.height) {
          dot.y = 0;
          dot.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Black rain animation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{user.name}</h1>
          <h2 className="text-xl text-gray-600">{user.title}</h2>
        </header>

        {/* Main profile grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile card */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <Image
                  src="/profile-avatar.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-gray-500">{user.title}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  CONTACT
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {user.email}
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {user.phone}
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {user.location}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  SKILLS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About section */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                About Me
              </h3>
              <p className="text-gray-700 leading-relaxed">{user.bio}</p>
            </section>

            {/* Experience section */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Work Experience
              </h3>
              <div className="space-y-6">
                {user.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      {exp.role}
                    </h4>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education section */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Education
              </h3>
              <div className="border-l-2 border-gray-200 pl-4">
                <h4 className="text-lg font-medium text-gray-800">
                  {user.education.degree}
                </h4>
                <p className="text-gray-600">{user.education.university}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Graduated: {user.education.year}
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} {user.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
