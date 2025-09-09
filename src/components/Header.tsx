import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center gap-x-10 pl-2 pr-4">
        <Link className="flex items-center gap-x-2" href="/">
          <Image
            className="size-8"
            src="/pc-icon.png"
            alt="Icone"
            width={56}
            height={56}
          />
          <span className="font-semibold">Museu Tecnológico</span>
        </Link>

        <nav className="ml-auto">
          <ul className="flex items-center gap-x-8 justify-end">
            <li className="border-b-2 border-white hover:border-b-2 hover:border-black">
              <Link className="font-semibold text-black" href="/">
                Sobre o Museu
              </Link>
            </li>

            <Menu />

            <li className=" rounded-md bg-blue-300 hover:bg-blue-400 p-1">
              <Link className="font-semibold text-white" href="/">
                Quiz interativo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
