"use client";
import React from "react";

const Timeline: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
          1960: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
          1980: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
          1990: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
          2000: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
          2010: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg">
          2020: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </section>
  );
};
export default Timeline;
