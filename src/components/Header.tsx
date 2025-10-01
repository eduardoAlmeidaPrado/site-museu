import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <header className="py-8 mx-auto">
      <div className="container flex items-center gap-x-10 pl-2 pr-4">
        <Link className="flex items-center gap-x-2" href="/">
          <Image src="/.png" alt="Icone" width={64} height={64} />
          <span className="font-extrabold text-3xl text-blue-950 uppercase">
            Museu de
            <br />
            Tecnologia
          </span>
        </Link>

        <nav className="ml-100">
          <ul className="flex items-center gap-x-8 justify-end">
            <li className="border-b-2 border-white hover:border-b-2 hover:border-blue-950">
              <Link className="font-semibold text-blue-950" href="/">
                Sobre o Museu
              </Link>
            </li>

            <li className="border-b-2 border-white hover:border-b-2 hover:border-blue-950">
              <Link className="font-semibold text-blue-950" href="/">
                Visitas
              </Link>
            </li>

            <li className="border-b-2 border-white hover:border-b-2 hover:border-blue-950">
              <Link className="font-semibold text-blue-950" href="/">
                Doações
              </Link>
            </li>

            <DropdownMenu
              label="Explore as Décadas"
              items={[
                { key: 1, content: "1960", href: "/" },
                { key: 2, content: "1970", href: "/" },
                { key: 3, content: "1980", href: "/" },
                { key: 4, content: "1990", href: "/" },
                { key: 5, content: "2000", href: "/" },
                { key: 6, content: "2010", href: "/" },
                { key: 7, content: "2020", href: "/" },
              ]}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
