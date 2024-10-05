import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import { CLICKABLE } from "../app/constants/style";
import Image from "next/image";
import simylare from "@/assets/simylare.svg";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      className={`flex justify-between items-center w-full h-[15svh] ${BACKGROUND_SECONDARY} `}
    >
      <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
        <div
          className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full px-10 items-center md:items-start rounded-br-[5svh] `}
        >
          <div className="relative w-28 h-full">
            <Image src={simylare} alt="symilare logo" fill={true} />
          </div>
        </div>
      </div>
      <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
        <div
          className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full px-10 items-center justify-end rounded-tl-[5svh]`}
        >
          <div
            className={`gap-6 flex justify-center items-center h-full max-h-7 md:max-h-10`}
          >
            <Link
              href={"https://www.instagram.com/simylare.caluire/"}
              target="_blank"
              className="h-full"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`${CLICKABLE} h-full`}
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/jimmy-andreotti-000772a8/"}
              target="_blank"
              className="h-full"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${CLICKABLE} h-full`}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
