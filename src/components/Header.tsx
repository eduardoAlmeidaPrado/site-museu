import Link from "next/link";
import Image from "next/image";
/*import DropdownMenu from "./DropdownMenu";*/

export default function Header() {
  return (
    <header className="py-4 mx-auto bg-white shadow-md">
      <div className="container flex items-center gap-x-6 pl-2 pr-4 min-h-[64px]">
        <Link className="flex items-center gap-x-2" href="/">
          <Image src="/logo.png" alt="Icone" width={48} height={48} />
          <span className="font-extrabold text-xl text-blue-950 uppercase leading-tight">
            Museu de
            <br />
            Tecnologia
          </span>
        </Link>

        <nav className="ml-auto">
          <ul className="flex items-center gap-x-6 justify-end">
            <li className="border-b-2 border-white hover:border-blue-950">
              <Link className="font-semibold text-blue-950 text-base" href="/">
                Sobre o Museu
              </Link>
            </li>
            <li className="border-b-2 border-white hover:border-blue-950">
              <Link className="font-semibold text-blue-950 text-base" href="/">
                Visitas
              </Link>
            </li>
            <li className="border-b-2 border-white hover:border-blue-950">
              <Link className="font-semibold text-blue-950 text-base" href="/">
                Doações
              </Link>
            </li>
            {/* DropdownMenu pode ser adicionado aqui */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
