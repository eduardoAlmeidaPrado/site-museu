"use client";
import React, { useEffect, useRef } from "react";

const Images = [
  { imageSrc: "/img/1.png", altText: "Imagem 1" },
  { imageSrc: "/img/2.png", altText: "Imagem 2" },
  { imageSrc: "/img/3.png", altText: "Imagem 3" },
  { imageSrc: "/img/4.png", altText: "Imagem 4" },
  { imageSrc: "/img/5.png", altText: "Imagem 5" },
  { imageSrc: "/img/6.png", altText: "Imagem 6" },
];

export const ImgGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(
      ".gallery-card"
    ) as NodeListOf<HTMLDivElement>;

    const cleanups: Array<() => void> = [];
    const MAX_TILT = 20;

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const rx = Math.max(
          Math.min((dy / rect.height) * MAX_TILT * 1.5, MAX_TILT),
          -MAX_TILT
        );
        const ry = Math.max(
          Math.min((dx / rect.width) * -MAX_TILT * 1.5, MAX_TILT),
          -MAX_TILT
        );
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      const onLeave = () => {
        card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div ref={containerRef} className="w-full py-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {Images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-card relative w-64 h-64 rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-lg transition-transform duration-150 will-change-transform"
            style={{
              transformStyle:
                "preserve-3d" as React.CSSProperties["transformStyle"],
            }}
          >
            <img
              src={img.imageSrc}
              alt={img.altText}
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
