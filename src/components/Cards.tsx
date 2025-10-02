"use client";

import React from "react";
interface CardProps {
  title: string;
  description: string;
  img: string;
}
const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <div className="min-w-[300px] snap-center bg-white shadow-md rounded-xl p-4 flex-shrink-0">
      <img src={img} alt={title} className="rounded-md mb-3" />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
const DecadeCards: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto my-10 p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Décadas</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <Card
          title="1970: A ascensão da computação pessoal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img="https://via.placeholder.com/300x200"
        />
        <Card
          title="1990: O Boom da Internet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img="https://via.placeholder.com/300x200"
        />
        <Card
          title="2000: Revolução Mobile"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img="https://via.placeholder.com/300x200"
        />
      </div>
    </section>
  );
};
export default DecadeCards;
