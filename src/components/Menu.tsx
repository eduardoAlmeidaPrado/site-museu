"use client";

import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="border-b-2 border-white hover:border-b-2 hover:border-black cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative flex items-center">
        <span className="font-semibold text-black">Explore as décadas</span>
        <Image
          className="size-3 m-0.5 pt-1"
          src="/arrow-down.svg"
          alt="arrow"
          width={56}
          height={56}
        />
        {open && (
          <div className="absolute top-6.5 left-0 w-full text-center shadow-lg bg-white z-10">
            <ul className="font-semibold text-black">
              <li className="py-1 hover:bg-gray-100">1960</li>
              <li className="py-1 hover:bg-gray-100">1970</li>
              <li className="py-1 hover:bg-gray-100">1980</li>
              <li className="py-1 hover:bg-gray-100">1990</li>
              <li className="py-1 hover:bg-gray-100">2000</li>
              <li className="py-1 hover:bg-gray-100">2010</li>
              <li className="py-1 hover:bg-gray-100">2020</li>
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
