import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="footer p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        
        {/* Centered Navigation Links */}
        <nav className="flex justify-center gap-6 mb-6 w-full">
          <a href="/about" className="link link-hover text-lg font-medium">About Us</a>
          <a href="/contact" className="link link-hover text-lg font-medium">Contact</a>
        </nav>

        {/* Centered Social Icons */}
        <div className="flex justify-center gap-4 w-full">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 transition"
          >
            <FaTwitter className="text-xl text-black hover:text-white" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-600 transition"
          >
            <FaYoutube className="text-xl text-black hover:text-white" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-800 transition"
          >
            <FaFacebookF className="text-xl text-black hover:text-white" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-pink-600 transition"
          >
            <FaInstagram className="text-xl text-black hover:text-white" />
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 border-t border-gray-400 pt-6 text-center w-full">
          <p className="text-sm">
            &copy; 2025 <strong>FullStack Dev</strong>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
