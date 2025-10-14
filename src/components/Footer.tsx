import Image from "next/image";
import Social from "../components/Social";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const yearDisplay =
    startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;
  const companyName = "UDC";

  return (
    <footer className="w-full bg-slate-900 text-white text-center py-6 mt-auto border-t border-slate-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center">
        <div className="col-span-1 flex justify-center">
          <Image src="/" alt="Logo UDC" width={128} height={128} className="" />
        </div>

        <div className="col-span-1 pt-2 flex flex-col items-center">
          <p className="font-semibold text-white mb-2">Parcerias:</p>
          <ul className="space-y-2">
            <li>
              <a href="#">Parceria 1</a>
            </li>
            <li>
              <a href="#">Parceria 2</a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 pt-2 flex flex-col">
          <ul className="space-y-2 font-semibold text-white">
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
      <div className="text-xs flex justify-center mt-4">
        <p>
          &copy; {yearDisplay} {companyName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
