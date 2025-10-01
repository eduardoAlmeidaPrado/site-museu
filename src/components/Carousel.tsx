"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/slide-1.jpg", alt: "Descrição da Imagem 1" },
  { src: "/images/slide-2.jpg", alt: "Descrição da Imagem 2" },
  { src: "/images/slide-3.jpg", alt: "Descrição da Imagem 3" },
];

const TRANSITION_DURATION = 5000;
const TRANSITION_STYLE = "transition-opacity duration-700 ease-in-out";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(goToNext, TRANSITION_DURATION);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-100">
      {" "}
      {images.map((image, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-full h-full 
            ${TRANSITION_STYLE}
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={80}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center drop-shadow-lg">
              {image.alt}
            </h1>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`
              w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400 opacity-70"
              } 
              transition-colors duration-300
            `}
          />
        ))}
      </div>
    </div>
  );
}
