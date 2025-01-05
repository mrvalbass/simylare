import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "@/app/constants/colors";
import type { ReactNode } from "react";

export enum Intent {
  Primary = "primary",
  Secondary = "secondary",
}

export default function HighLightedText({
  children,
  intent,
}: {
  children: ReactNode;
  intent: string;
}) {
  return (
    <span
      className={`relative p-2 ${intent === Intent.Primary ? TEXT_PRIMARY : TEXT_SECONDARY} whitespace-nowrap`}
    >
      <span
        className={`${intent === Intent.Primary ? BACKGROUND_PRIMARY : BACKGROUND_SECONDARY} w-full h-full rotate-1 inline-block absolute -z-10 rounded left-0 top-0`}
      ></span>
      {children}
    </span>
  );
}
