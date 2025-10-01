"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// 1. Defina suas imagens (ajuste os caminhos conforme sua estrutura)
const images = [
  { src: "/images/slide-1.jpg", alt: "Descrição da Imagem 1" },
  { src: "/images/slide-2.jpg", alt: "Descrição da Imagem 2" },
  { src: "/images/slide-3.jpg", alt: "Descrição da Imagem 3" },
  // Adicione mais imagens conforme necessário
];

// Configuração do carrossel
const TRANSITION_DURATION = 5000; // Tempo em milissegundos
const TRANSITION_STYLE = "transition-opacity duration-700 ease-in-out"; // Duração da transição CSS

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. useEffect para o autoplay
  useEffect(() => {
    // Função para avançar para a próxima imagem
    const goToNext = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length // Volta para 0 se for a última
      );
    };

    // Configura o intervalo para a transição automática
    const intervalId = setInterval(goToNext, TRANSITION_DURATION);

    // Limpa o intervalo quando o componente for desmontado ou re-renderizado
    return () => clearInterval(intervalId);
  }, [images.length]); // Re-executa se o número de imagens mudar (raro)

  return (
    // Carrossel com largura total (w-full), altura fixa e posição relativa
    <div className="relative w-full overflow-hidden h-100">
      {" "}
      {/* h-screen ocupa a altura total da viewport */}
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
            // Next.js Image Component para otimização
            fill // Ocupa todo o espaço do div pai (inset-0)
            priority={index === 0} // Prioriza o carregamento da primeira imagem
            quality={80} // Qualidade da imagem
            sizes="100vw" // Diz ao Next.js que a imagem é 100% da largura da tela
            className="object-cover" // Garante que a imagem cubra toda a área sem distorcer
          />

          {/* Opcional: Adicionar uma sobreposição para melhorar a legibilidade do texto */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Opcional: Texto centralizado na imagem */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center drop-shadow-lg">
              {image.alt}
            </h1>
          </div>
        </div>
      ))}
      {/* Opcional: Indicadores de slide */}
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
