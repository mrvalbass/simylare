import Link from "next/link";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import Contacts from "./Contacts";
import Socials from "./Socials";
import { CLICKABLE } from "@/app/constants/style";

export default function Footer() {
  return (
    <footer>
      <div
        className={`flex h-[10svh] max-h-[130px] w-full md:h-[15svh] ${BACKGROUND_PRIMARY} `}
      >
        <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
          <div
            className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full rounded-br-[5svh] pl-10 md:pl-24`}
          >
            <Contacts />
          </div>
        </div>
        <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
          <div
            className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full items-center justify-end rounded-tl-[5svh] pr-10 md:pr-24`}
          >
            <Socials />
          </div>
        </div>
      </div>
      <div
        className={`flex justify-around py-1 ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY}`}
      >
        <Link href="#" className={`font-Hanken text-xs ${CLICKABLE}`}>
          Mentions Légales
        </Link>
        <Link
          href="https://valentinguillot.fr"
          target="_blank"
          className={`font-Hanken text-xs ${CLICKABLE}`}
        >
          ©Valentin Guillot - 2024
        </Link>
      </div>
    </footer>
  );
}
