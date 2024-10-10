import Image from "next/image";
import Header from "@/components/Header";
import heroBackground from "@/assets/hero-background.jpg";
import landing1 from "@/assets/landing-1.jpg";
import landing2 from "@/assets/landing-2.jpg";
import { BACKGROUND_SECONDARY, TEXT_PRIMARY } from "./constants/colors";
import Footer from "@/components/Footer";
import { HighLightedText } from "@/components/HighlightedText";
import { Separator } from "@/components/Separator";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative h-[200px] md:h-[350px]">
        <Image
          src={heroBackground}
          fill={true}
          alt="mushrooms"
          className="object-cover rounded-b-2xl"
        />
        <div className="flex flex-col absolute top-0 left-0 h-full w-full items-center bg-black/20 rounded-b-2xl">
          <p
            className={`flex text-beige/80 font-Libre text-2xl md:text-4xl h-full items-center mx-12 text-center`}
          >
            Explorateur du royaume fongique
          </p>
        </div>
      </section>

      <section>
        <Separator className={`${BACKGROUND_SECONDARY}`} />
        <p
          className={`font-Libre text-xl md:text-3xl text-center m-5 md:m-10 font-bold ${TEXT_PRIMARY} leading-loose md:leading-[2]`}
        >
          Découvrez l&apos; incroyable potentiel des{" "}
          <HighLightedText>champignons</HighLightedText> avec Simylare
        </p>
        <Separator className={`${BACKGROUND_SECONDARY}`} />
      </section>

      <section
        className={`w-4/5 max-w-[1000px] mx-auto my-5 md:my-10 flex flex-col gap-10 md:gap-20 font-Hanken ${TEXT_PRIMARY}`}
      >
        <div className="flex gap-5 md:gap-20 items-stretch">
          <p className="basis-1/2 md:leading-[2.5rem] md:text-xl">
            La première étape consiste à intégrer les champignons dans notre
            alimentation. Véritable superaliment, les champignons regorgent de
            molécules naturelles et représentent une alternative exceptionnelle
            à la viande.
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
            D’autres projets inspirants suivront, avec toujours le même objectif
            : apporter de la circularité à nos modes de production
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
