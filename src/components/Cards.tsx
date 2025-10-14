"use client";

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  img: string;
  href: string;
}
const Card: React.FC<CardProps> = ({ title, description, img, href }) => {
  return (
    <Link
      href={href}
      className="min-w-[300px] snap-center bg-white shadow-md rounded-xl p-4 flex-shrink-0 hover:shadow-lg transition"
    >
      <img src={img} alt={title} className="rounded-md mb-3" />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
};

const DecadeCards: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto my-10 p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Explorando as décadas
      </h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <Card
          title="1970: A ascensão da computação pessoal"
          description="O computador chega às casas e escritórios."
          img="https://via.placeholder.com/300x200"
          href="/decadas/1970"
        />
        <Card
          title="1980: O Boom da Internet"
          description="Nasce a rede que conecta o mundo inteiro."
          img="https://via.placeholder.com/300x200"
          href="/decadas/1980"
        />
        <Card
          title="1990: O mundo Mobile"
          description="A comunicação se torna portátil e instantânea."
          img="https://via.placeholder.com/300x200"
          href="/decadas/1990"
        />
        <Card
          title="2000: Surgimento dos Smartphones"
          description="Internet, câmera e telefone em um só aparelho."
          img="https://via.placeholder.com/300x200"
          href="/decadas/2000"
        />
        <Card
          title="2010: A computação em Nuvem"
          description="Arquivos e sistemas passam a existir online."
          img="https://via.placeholder.com/300x200"
          href="/decadas/2010"
        />
        <Card
          title="2020: Revolução da Inteligência Artificial"
          description="Máquinas aprendem, criam e auxiliam nas decisões."
          img="https://via.placeholder.com/300x200"
          href="/decadas/2020"
        />
        <Card
          title="2030: Futuro em construção"
          description="O próximo salto da inovação."
          img="https://via.placeholder.com/300x200"
          href="/decadas/2030"
        />
      </div>
    </section>
  );
};

export default DecadeCards;
