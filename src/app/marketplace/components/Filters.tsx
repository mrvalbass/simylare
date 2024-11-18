import {
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "@/app/constants/colors";
import type { Dispatch, SetStateAction } from "react";
import { FaGrip, FaListUl } from "react-icons/fa6";

interface FiltersProps {
  lineView: boolean;
  setLineView: Dispatch<SetStateAction<boolean>>;
}

export default function Filters({ lineView, setLineView }: FiltersProps) {
  return (
    <div className="relative flex justify-end rounded p-2">
      <div className="relative flex rounded">
        <div
          className={`aspect-square h-full rounded ${BACKGROUND_SECONDARY} absolute -z-10 ${
            lineView ? "translate-x-[100%]" : "translate-x-0"
          } transition-all`}
        ></div>
        <div
          className={`aspect-square p-2 ${
            lineView ? TEXT_PRIMARY : TEXT_SECONDARY
          } z-10`}
        >
          <FaGrip onClick={() => setLineView(false)} />
        </div>
        <div
          className={`aspect-square p-2 ${
            lineView ? TEXT_SECONDARY : TEXT_PRIMARY
          }`}
        >
          <FaListUl onClick={() => setLineView(true)} />
        </div>
      </div>
    </div>
  );
}
