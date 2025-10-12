"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Social: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto py-4">
      <a
        href="#"
        className="text-5xl text-gray-400 transition-all duration-300 hover:text-pink-500 hover:drop-shadow-[0_0_15px_#ff00c8]"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Social;
