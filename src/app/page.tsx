import Image from "next/image";
import heroBackground from "@/assets/hero-background.jpg";
import landing1 from "@/assets/landing-1.jpg";
import landing2 from "@/assets/landing-2.jpg";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "./constants/colors";
import HighLightedText, { Intent } from "@/components/HighlightedText";
import Separator from "@/components/Separator";

const HeroSection = () => {
  return (
    <section className="relative h-[200px] md:h-[350px]">
      <Image
        src={heroBackground}
        fill={true}
        sizes="100%"
        alt="mushrooms"
        className="object-cover rounded-b-2xl"
      />
      <div className="flex flex-col font-Libre absolute h-full w-full justify-center items-center bg-black/20 rounded-b-2xl">
        <h1 className={` text-beige/80 text-4xl md:text-6xl`}>Simylare</h1>
        <Separator className="bg-beige/80 w-1/4 my-5 md:my-10" />
        <p className={` text-beige/80 text-2xl md:text-4xl text-center`}>
          Explorateur du royaume fongique
        </p>
      </div>
    </section>
  );
};

const HighLightSection = () => {
  return (
    <section>
      <p
        className={`font-Libre text-xl md:text-3xl text-center m-5 md:m-10 font-bold ${TEXT_PRIMARY} leading-loose md:leading-[2]`}
      >
        Découvrez l&apos; incroyable potentiel des{" "}
        <HighLightedText intent={Intent.Secondary}>champignons</HighLightedText>{" "}
        avec Simylare
      </p>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section
      className={`w-4/5 max-w-[1200px] mx-auto my-5 md:my-10 flex flex-col gap-10 md:gap-20 font-Hanken ${TEXT_PRIMARY}`}
    >
      <div className="flex gap-5 md:gap-20 items-stretch">
        <p className="basis-1/2 md:leading-[2.5rem] md:text-xl">
          La première étape consiste à intégrer les champignons dans notre
          alimentation. Véritable superaliment, les champignons regorgent de
          molécules naturelles et représentent une alternative exceptionnelle à
          la viande.
        </p>
        <div className="relative basis-1/2">
          <Image
            src={landing1}
            fill={true}
            alt="cooked mushrooms"
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="flex gap-5 md:gap-20 items-stretch">
        <div className="relative basis-1/2">
          <Image
            src={landing2}
            fill={true}
            alt="cooked mushrooms"
            className="object-cover rounded-3xl"
          />
        </div>
        <p className="basis-1/2 md:leading-[2.5rem] md:text-xl text-right">
          Ensuite, nous innoverons en utilisant le mycélium, la partie
          essentielle mais souvent méconnue des champignons, pour créer des
          matériaux durables capables de remplacer les plastiques polluants.
          D’autres projets inspirants suivront, avec toujours le même objectif :
          apporter de la circularité à nos modes de production
        </p>
      </div>
    </section>
  );
};

const MapSection = () => {
  const HighlightedTextStyle = `whitespace-nowrap ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} rounded px-2 py-1 font-Libre`;
  return (
    <section
      className={`w-4/5 max-w-[1200px] mx-auto my-5 md:my-10 flex flex-col md:flex-row gap-10 md:gap-20 font-Hanken ${TEXT_PRIMARY}`}
    >
      <div
        className={`basis-1/4 md:basis-1/2 md:text-xl ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} p-5 md:px-10 rounded-3xl flex flex-col justify-center items-start gap-4 md:hover:gap-8 transition-[gap] duration-500`}
      >
        <p className="w-full text-center md:text-left">Retrouvez-nous au</p>
        <p className="flex flex-wrap gap-y-1 items-center justify-center md:justify-start">
          <span className={HighlightedTextStyle}>Marché de Montessuy</span>
          <span className="px-1 w-full md:w-auto text-center">à</span>
          <span className={HighlightedTextStyle}>Caluire-et-Cuire</span>
        </p>
        <p className="w-full text-center md:text-left">
          Tous les <span className={HighlightedTextStyle}>samedis</span> de{" "}
          <span className={HighlightedTextStyle}>8h à 13h</span>
        </p>
      </div>
      <iframe
        className="rounded-3xl basis-3/4 md:basis-1/2 w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.0160518678906!2d4.845267012710624!3d45.79058455561865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebfeec8d6ee9%3A0x42ffd4738fe45a20!2sArtisans%20et%20Cr%C3%A9ateurs%20de%20Caluire!5e0!3m2!1sfr!2sfr!4v1736100450337!5m2!1sfr!2sfr"
        width="600"
        height="300"
        loading="lazy"
      ></iframe>{" "}
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Separator className={`${BACKGROUND_SECONDARY} my-10`} />
      <HighLightSection />
      <Separator className={`${BACKGROUND_SECONDARY} my-10`} />
      <ContentSection />
      <Separator className={`${BACKGROUND_SECONDARY} my-10`} />
      <MapSection />
    </main>
  );
}
