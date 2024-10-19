import {
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "@/app/constants/colors";
import { faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Dispatch, SetStateAction } from "react";

interface FiltersProps {
  lineView: boolean;
  setLineView: Dispatch<SetStateAction<boolean>>;
}

export default function Filters({ lineView, setLineView }: FiltersProps) {
  return (
    <div className="flex justify-end p-2 rounded relative">
      <div className="flex rounded relative">
        <div
          className={`rounded aspect-square h-full ${BACKGROUND_SECONDARY} absolute -z-10 ${
            lineView ? "translate-x-[100%]" : "translate-x-0"
          } transition-all`}
        ></div>
        <FontAwesomeIcon
          icon={faGrip}
          className={`aspect-square p-2 ${
            lineView ? TEXT_PRIMARY : TEXT_SECONDARY
          } z-10`}
          onClick={() => setLineView(false)}
        />
        <FontAwesomeIcon
          icon={faListUl}
          className={`aspect-square p-2 ${
            lineView ? TEXT_SECONDARY : TEXT_PRIMARY
          }`}
          onClick={() => setLineView(true)}
        />
      </div>
    </div>
  );
}
