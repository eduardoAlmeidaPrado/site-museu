"use client";
import React, { useEffect, useRef } from "react";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  quote: string;
  imageUrl: string;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "1960: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/712395/pexels-photo-712395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "1970: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "1980: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/9095426/pexels-photo-9095426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "1990: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/2088200/pexels-photo-2088200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "2000: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    title: "2010: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/978864/pexels-photo-978864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    title: "2020: INSIRA O TEXTO AQUI",
    subtitle: "INSERIR TEXTO",
    quote: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
    imageUrl:
      "https://images.pexels.com/photos/978864/pexels-photo-978864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <div
      className="group relative flex flex-col justify-end p-6 flex-shrink-0 
                 w-[250px] md:w-1/4 h-[350px] lg:h-[450px] bg-black 
                 rounded-lg overflow-hidden shadow-lg 
                 transition-all duration-500 
                 hover:w-[400px] hover:md:w-1/2"
    >
      <img
        src={data.imageUrl}
        alt={data.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-colors duration-500 group-hover:bg-opacity-50" />
      <div
        className="relative z-10 space-y-2 mb-4 
                   md:absolute md:bottom-20 md:left-6 
                   transition-all duration-500 group-hover:bottom-40"
      >
        <h2 className="text-xl font-bold text-white">{data.title}</h2>
        <p className="text-sm text-gray-300">{data.subtitle}</p>
      </div>
      <div
        className="relative z-10 
                   mt-4 transform translate-y-6 opacity-0 
                   transition-all duration-500 
                   group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p className="text-lg text-white">"{data.quote}"</p>
      </div>
    </div>
  );
};

const Cards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-[90vw]">
        <div
          ref={scrollContainerRef}
          className="flex flex-row flex-nowrap gap-4 px-4 py-8 overflow-x-scroll snap-x"
        >
          {CARDS.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
