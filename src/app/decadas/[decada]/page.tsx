// Dados de exemplo
const decadesData: Record<string, { title: string; content: string }> = {
  "1960": {
    title: "A Contracultura",
    content: "Explosão do Rock, movimentos sociais e corrida espacial.",
  },
  "1970": {
    title: "A Era Disco",
    content: "Crises do petróleo, emergência da música disco e punk rock.",
  },
  "1980": {
    title: "Tecnologia e Excesso",
    content: "Ascensão do computador pessoal, MTV e moda exagerada.",
  },
  "1990": {
    title: "O Grunge e a Internet",
    content: "Nirvana, o boom da World Wide Web e videogames 3D.",
  },
  "2000": {
    title: "O Milênio Digital",
    content: "Redes sociais, smartphones e cultura pop globalizada.",
  },
  "2010": {
    title: "A Década do Streaming",
    content: "Domínio das plataformas de streaming e ativismo online.",
  },
  "2020": {
    title: "A Década Atual",
    content: "Foco em IA, saúde global e grandes mudanças climáticas.",
  },
};

type DecadePageProps = {
  params: { decada: string };
};

export default function DecadePage({ params }: DecadePageProps) {
  const decada = params.decada;
  const data = decadesData[decada];

  if (!data) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl text-red-600 font-bold">
          404 - Década Não Encontrada
        </h2>
        <p className="text-lg text-gray-600">
          A década de {decada} não está disponível para exploração.
        </p>
      </div>
    );
  }

  return (
    <div className={`container mx-auto p-8 min-h-screen`}>
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
        Explorando a Década de {decada}
      </h1>
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">
        {data.title}
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-2xl">
        <p className="text-lg leading-relaxed text-gray-800">{data.content}</p>

        <p className="mt-8 text-sm text-gray-500">
          * Conteúdo carregado dinamicamente via parâmetro de rota.
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const decades = ["1960", "1970", "1980", "1990", "2000", "2010", "2020"];
  return decades.map((decada) => ({
    decada,
  }));
}
