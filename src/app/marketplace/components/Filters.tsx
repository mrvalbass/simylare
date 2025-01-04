import {
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "@/app/constants/colors";
import { FaGrip, FaListUl } from "react-icons/fa6";
import { View } from "../types";

interface FiltersProps {
  view: View;
  toggleView: (view: View) => void;
}

export default function Filters({ view, toggleView }: FiltersProps) {
  return (
    <div className="relative flex justify-end rounded p-2">
      <div className="relative flex rounded">
        <div
          className={`aspect-square h-full rounded ${BACKGROUND_SECONDARY} absolute -z-10 ${
            view === View.Line ? "translate-x-[100%]" : "translate-x-0"
          } transition-all`}
        ></div>
        <div
          className={`aspect-square p-2 ${
            view === View.Line ? TEXT_PRIMARY : TEXT_SECONDARY
          } z-10`}
        >
          <FaGrip onClick={() => toggleView(View.Grid)} />
        </div>
        <div
          className={`aspect-square p-2 ${
            view === View.Line ? TEXT_SECONDARY : TEXT_PRIMARY
          }`}
        >
          <FaListUl onClick={() => toggleView(View.Line)} />
        </div>
      </div>
    </div>
  );
}
