import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-2 px-4">
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
              <a href="">LixoTec</a>
            </li>
            <li>
              <a href="">Texto</a>
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

        <div className="col-span-1 pt-2 flex flex-col items-center">
          <ul className="space-y-2 font-semibold text-blue-950">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="flex items-center"
              >
                <FaFacebook className="w-4 h-4 mr-0.5" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/museu_tecudc"
                target="_blank"
                className="flex items-center"
              >
                <FaInstagram className="w-4 h-4 mr-0.5 pr-0.5 " />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="flex items-center"
              >
                <FaYoutube className="w-4 h-4 mr-0.5" />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <span className="text-xs">Copyright</span>
      </div>
    </footer>
  );
}
