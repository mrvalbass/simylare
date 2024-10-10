import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import { Contacts } from "./Contacts";
import { Socials } from "./Socials";

export default function Footer() {
  return (
    <footer
      className={`flex w-full h-[10svh] md:h-[15svh] max-h-[130px] ${BACKGROUND_PRIMARY} `}
    >
      <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
        <div
          className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full pl-24 rounded-br-[5svh]`}
        >
          <Contacts />
        </div>
      </div>
      <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
        <div
          className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full pr-24 rounded-tl-[5svh] items-center justify-end`}
        >
          <Socials />
        </div>
      </div>
    </footer>
  );
}
