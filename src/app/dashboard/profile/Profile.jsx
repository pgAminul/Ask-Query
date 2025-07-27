"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaUserEdit,
  FaEnvelope,
  FaCalendarAlt,
  FaIdBadge,
  FaSignInAlt,
  FaSave,
} from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import useAuth from "@/app/Components/AuthProvider/useAuth";
import PublicUrl from "@/app/Components/URL/PublicUrl";

export default function ProfessionalProfilePage() {
  const canvasRef = useRef(null);
  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");

  const axiosPublic = PublicUrl();

  // Animate canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId,
      dots = [];

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${dot.opacity})`;
        ctx.fill();
        dot.y += dot.speed;
        if (dot.y > canvas.height) {
          dot.y = 0;
          dot.x = Math.random() * canvas.width;
        }
      });
      animationId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  const formatDate = (timestamp) => {
    return new Date(Number(timestamp)).toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const handleSave = () => {
    const profileData = {
      email: user?.email,
      about,
      skills: skills.split(",").map((s) => s.trim()),
    };

    axiosPublic
      .post(`/api/userDetails`, profileData)
      .then((res) => console.log(res.data));
    console.log("Saving profile data:", profileData);
    // TODO: Firebase/Backend API call here
    setShowModal(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Background animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Profile Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <Image
            src={user?.photoURL || "/default-avatar.png"}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-white shadow"
          />
          <h1 className="text-3xl font-bold mt-4">{user?.displayName}</h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <FaEnvelope /> {user?.email}
          </p>
          <p className="text-sm mt-1">
            {user?.emailVerified
              ? "✅ Email Verified"
              : "❌ Email Not Verified"}
          </p>

          {/* Add Details Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow"
          >
            <MdOutlineAddCircle size={20} />
            Add Details
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <InfoItem
            icon={<FaCalendarAlt />}
            label="Created"
            value={formatDate(user.metadata?.createdAt)}
          />
          <InfoItem
            icon={<FaSignInAlt />}
            label="Last Login"
            value={formatDate(user.metadata?.lastLoginAt)}
          />
          <InfoItem icon={<FaIdBadge />} label="User ID" value={user.uid} />
          <InfoItem
            icon={<FaUserEdit />}
            label="Provider"
            value={user.providerId}
          />
        </div>

        {/* Show Additional Info */}
        {about && (
          <div className="mt-8 bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              About Me
            </h3>
            <p className="text-gray-600">{about}</p>
          </div>
        )}
        {skills && (
          <div className="mt-6 bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Skills</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {skills.split(",").map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {skill.trim()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Modal for Additional Details */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Profile Details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                About
              </label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills (comma separated)
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="JavaScript, React, Next.js"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// InfoItem component
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-gray-600">{label}</h4>
        <p className="text-gray-800 text-sm break-all">{value}</p>
      </div>
    </div>
  );
}
