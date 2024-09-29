import Image from "next/image";
import Header from "@/components/Header";
import heroBackground from "@/assets/hero-background.jpg";
import landing1 from "@/assets/landing-1.jpg";
import landing2 from "@/assets/landing-2.jpg";
import {
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "./constants/colors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative h-[350px]">
        <Image
          src={heroBackground}
          fill={true}
          alt="mushrooms"
          className="object-cover"
        />
        <div className="flex flex-col absolute top-0 left-0 h-full w-full items-center bg-black/20">
          <p
            className={`flex text-beige/80 font-Libre text-4xl h-full items-center`}
          >
            Explorateur du royaume fongique
          </p>
        </div>
      </div>
      <div
        className={`w-1/2 mx-auto h-[3px] rounded-full ${BACKGROUND_SECONDARY} my-10`}
      ></div>

      <p
        className={`font-Libre text-3xl text-center my-10 font-bold ${TEXT_PRIMARY}`}
      >
        Découvrez l&apos; incroyable potentiel des{" "}
        <span className={`relative p-2 ${TEXT_SECONDARY}`}>
          <div
            className={`${BACKGROUND_SECONDARY} w-full h-full rotate-2 inline-block absolute -z-10 rounded left-0 top-0`}
          ></div>
          champignons
        </span>{" "}
        avec Simylare
      </p>
      <div
        className={`w-1/2 mx-auto h-[3px] rounded-full ${BACKGROUND_SECONDARY}`}
      ></div>
      <div
        className={`w-4/5 mx-auto my-10 flex flex-col gap-10 font-Hanken ${TEXT_PRIMARY}`}
      >
        <div className="flex gap-20 items-center">
          <p className="basis-1/2 leading-[2.5rem] text-xl text-justify">
            La première étape consiste à intégrer les champignons dans notre
            alimentation. Véritable superaliment, les champignons regorgent de
            molécules naturelles et représentent une alternative exceptionnelle
            à la viande.
          </p>
          <div className="relative basis-1/2 h-[300px]">
            <Image
              src={landing1}
              fill={true}
              alt="cooked mushrooms"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="relative basis-1/2 h-[300px]">
            <Image
              src={landing2}
              fill={true}
              alt="cooked mushrooms"
              className="object-cover rounded-3xl"
            />
          </div>
          <p className="basis-1/2 leading-[2.5rem] text-xl text-justify">
            Ensuite, nous innoverons en utilisant le mycélium, la partie
            essentielle mais souvent méconnue des champignons, pour créer des
            matériaux durables capables de remplacer les plastiques polluants.
            D’autres projets inspirants suivront, avec toujours le même objectif
            : apporter de la circularité à nos modes de production
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
