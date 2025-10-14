import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
/*import Timeline from "../components/Timeline";*/
import About from "../components/About";
import { Carousel3D } from "../components/Carousel3D";

const sampleImages = [
  { imageSrc: "/img/1.png", altText: "Imagem 1" },
  { imageSrc: "/img/2.png", altText: "Imagem 2" },
  { imageSrc: "/img/3.png", altText: "Imagem 3" },
  { imageSrc: "/img/4.png", altText: "Imagem 4" },
  { imageSrc: "/img/5.png", altText: "Imagem 5" },
];

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Carousel />
      <About />
      <Cards />
      {/*<Timeline />*/}
      <Carousel3D images={sampleImages} autoRotate={true} />
    </div>
  );
}
