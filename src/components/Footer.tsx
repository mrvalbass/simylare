import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import { CLICKABLE } from "../app/constants/style";
import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <nav
      className={`flex justify-between items-center w-full h-[10svh] md:h-[15svh] ${BACKGROUND_PRIMARY} `}
    >
      <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
        <div
          className={`flex md:flex-col ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full md:px-10 rounded-br-[5svh] gap-6 items-center md:items-stretch justify-center`}
        >
          <Link
            href="mailto:jimmy.andreotti@simylare.com"
            target="_blank"
            className={`flex w-fit h-5 items-center gap-2 ${CLICKABLE}`}
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-full" />
            <p className="hidden md:block">jimmy.andreotti@simylare.com</p>
          </Link>
          <Link
            href="tel:+33665145033"
            className={`flex w-fit h-5 items-center gap-2 ${CLICKABLE}`}
          >
            <FontAwesomeIcon icon={faPhone} className="h-full" />
            <p className="hidden md:block">+33 6 65 14 50 33</p>
          </Link>
        </div>
      </div>
      <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
        <div
          className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full px-10 items-center justify-end rounded-tl-[5svh]`}
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
