import { BACKGROUND_SECONDARY, TEXT_SECONDARY } from "@/app/constants/colors";
import type { ReactNode } from "react";

export default function HighLightedText({ children }: { children: ReactNode }) {
  return (
    <span className={`relative p-2 ${TEXT_SECONDARY} whitespace-nowrap`}>
      <span
        className={`${BACKGROUND_SECONDARY} w-full h-full rotate-2 inline-block absolute -z-10 rounded left-0 top-0`}
      ></span>
      {children}
    </span>
  );
}
