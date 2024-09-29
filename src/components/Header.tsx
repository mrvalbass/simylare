import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import { CLICKABLE } from "../app/constants/style";

export default function Header() {
  return (
    <nav
      className={`flex justify-between items-center w-full h-[10svh] ${BACKGROUND_SECONDARY} `}
    >
      <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
        <div
          className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full px-20 items-center rounded-br-[5svh]`}
        >
          <p>logo</p>
        </div>
      </div>
      <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
        <div
          className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full px-20 items-center justify-end rounded-tl-[5svh]`}
        >
          <div className={`w-1/6 gap-6 flex justify-center`}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${CLICKABLE} max-h-10`}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${CLICKABLE} max-h-10`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
