"use client";

import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiHome,
  FiEdit,
  FiMessageSquare,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const links = [
    { href: "/", label: "Home", icon: <FiHome /> },
    {
      href: "/dashboard/my-questions",
      label: "My Questions",
      icon: <FiMessageSquare />,
    },
    {
      href: "/dashboard/ask-question",
      label: "Ask a Question",
      icon: <FiEdit />,
    },
    { href: "/dashboard/profile", label: "My Profile", icon: <FiUser /> },
  ];

  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-amber-800/70 backdrop-blur-md px-4 py-2">
        <div className="flex items-center gap-2">
          <Image
            src="https://i.ibb.co/wW93yy6/myimg.jpg"
            alt="user"
            width={32}
            height={32}
            className="rounded-full "
          />
          <h2 className="text-white text-sm font-semibold">AskZone</h2>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay + Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Sidebar */}
            <motion.div
              key="mobile-sidebar"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-64 z-40 bg-amber-800/70 backdrop-blur-md border-r border-white/20 p-4 pt-20 flex flex-col gap-y-6 shadow-lg md:hidden"
            >
              <div className=" items-center gap-3 mt-8 hidden md:block">
                <Image
                  src="https://i.ibb.co/wW93yy6/myimg.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full "
                />
                <h2 className="text-white text-sm font-semibold">AskZone</h2>
              </div>

              <div className="flex flex-col space-y-4">
                {links.map(({ icon, label, href }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-white hover:text-white"
                    >
                      <span className="text-xl">{icon}</span>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm"
                      >
                        {label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.div
        animate={{ width: expanded ? 256 : 64 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex fixed top-0 left-0 h-full z-40 bg-amber-800/70 backdrop-blur-md border-r border-white/20 p-4 flex-col gap-y-6 shadow-lg"
      >
        {/* Collapse Toggle */}
        <div className="flex justify-end">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setExpanded(!expanded)}
            className="text-white/70 hover:text-white transition"
          >
            {expanded ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>

        {/* Profile */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 "
          >
            <Image
              src="https://i.ibb.co/wW93yy6/myimg.jpg"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h2 className="text-white text-sm font-semibold">AskZone</h2>
          </motion.div>
        )}

        {/* Links */}
        <div className="flex flex-col space-y-4 mt-4">
          {links.map(({ icon, label, href }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={href}
                className="flex items-center gap-3 text-white hover:text-white"
              >
                <span className="text-xl">{icon}</span>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm"
                  >
                    {label}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
