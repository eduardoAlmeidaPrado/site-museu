import React from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import Timeline from "../components/Timeline";
import About from "../components/About";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Carousel />

      <About />

      <Cards />

      <Timeline />

      <section className="max-w-5xl mx-auto p-6">
        <h3 className="font-bold text-lg mb-4">Galeria de Equipamentos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-400 h-40"></div>
        </div>
      </section>
    </div>
  );
}
