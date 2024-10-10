import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import { Socials } from "./Socials";
import Link from "next/link";
import { Logo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UnderlinedAnimatedText } from "./UnderlinedAnimatedText";

export default function Header() {
  return (
    <header
      className={`flex justify-between items-center w-full h-[10svh] max-h-[130px] md:h-[15svh] relative`}
    >
      <div className="w-full h-full flex absolute -z-10">
        <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
          <div
            className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full px-10 items-center md:items-start rounded-br-[5svh] `}
          ></div>
        </div>

        <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
          <div
            className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full px-10 items-center justify-end rounded-tl-[5svh]`}
          ></div>
        </div>
      </div>

      <div className="flex w-full h-full md:px-24 items-center ">
        <Logo className="basis-1/2 md:basis-auto" />
        <nav className="hidden md:flex w-full h-full justify-center gap-40 items-center font-bold font-Hanken text-lg">
          <Link href={"#"} className={`${TEXT_SECONDARY} underline-animation`}>
            <UnderlinedAnimatedText lineColor={BACKGROUND_PRIMARY}>
              Le Projet
            </UnderlinedAnimatedText>
          </Link>
          <Link href={"#"} className={`${TEXT_PRIMARY}`}>
            <UnderlinedAnimatedText lineColor={BACKGROUND_SECONDARY}>
              Boutique
            </UnderlinedAnimatedText>
          </Link>
        </nav>
        <Socials className={`hidden md:flex ${TEXT_PRIMARY}`} />
        <div className="md:hidden flex h-full basis-1/2 items-center justify-end px-10">
          <FontAwesomeIcon icon={faBars} className={` h-1/3 ${TEXT_PRIMARY}`} />
        </div>
      </div>
    </header>
  );
}
