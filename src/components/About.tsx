"use client";

const About: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <img
          src="https://via.placeholder.com/500x300"
          alt="COLOCAR IMAGEM AQUI"
          className="rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Sobre o Museu</h2>
        <h3 className="text-xl text-gray-600 mb-3">
          Uma jornada através da inovação
        </h3>
        <p className="text-gray-700 text-justify leading-relaxed">
          O Museu da Tecnologia é um espaço dedicado a contar a história da
          inovação humana, mostrando como cada descoberta transformou a maneira
          como vivemos, trabalhamos e nos conectamos. O objetivo do museu é
          despertar a curiosidade, inspirar novas ideias e mostrar que cada
          avanço tecnológico é parte de uma jornada contínua de criatividade e
          progresso.
        </p>
      </div>
    </section>
  );
};

export default About;
