import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AskZone</h3>
            <p className="text-base-content/80">
              The community-driven Q&A platform for developers and tech
              enthusiasts.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Users
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  JavaScript
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-base-content/70" />
                <span className="text-base-content/80">
                  123 Tech Street, San Francisco, CA
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-base-content/70" />
                <a
                  href="mailto:contact@askzone.com"
                  className="text-base-content/80 hover:text-primary transition-colors"
                >
                  contact@askzone.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-base-content/70" />
                <a
                  href="tel:+11234567890"
                  className="text-base-content/80 hover:text-primary transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-content/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-content/70 text-sm">
            © {new Date().getFullYear()} AskZone. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-base-content/70 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-base-content/70 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-base-content/70 hover:text-primary transition-colors text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
