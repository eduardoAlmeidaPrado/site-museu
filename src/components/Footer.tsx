import Image from "next/image";
import Social from "../components/Social";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-center py-6 mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center">
        <div className="col-span-1 flex justify-center">
          <Image
            src="/logo-udc.png"
            alt="Logo UDC"
            width={128}
            height={128}
            className=""
          />
        </div>

        <div className="col-span-1 pt-2 flex flex-col items-center">
          <span className="font-semibold text-blue-950">Parcerias:</span>
          <ul className="space-y-2">
            <li>
              <a href="#">LixoTec</a>
            </li>
            <li>
              <a href="#">Texto</a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 pt-2 flex flex-col items-center">
          <ul className="space-y-2 font-semibold text-blue-950">
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Visitas</a>
            </li>
            <li>
              <a href="#">Doações</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <Social />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <span className="text-xs">Copyright</span>
      </div>
    </footer>
  );
}
