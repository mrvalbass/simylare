"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../app/constants/colors";
import Socials from "./Socials";
import Logo from "./Logo";
import UnderlinedAnimatedText from "./UnderlinedAnimatedText";
import { CLICKABLE } from "../app/constants/style";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const { scrollY } = useScroll();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const height = useTransform(
    scrollY,
    [0, 100],
    isSmallScreen ? ["10svh", "8svh"] : ["15svh", "8svh"]
  );

  const padding = useTransform(
    scrollY,
    [0, 100],
    isSmallScreen ? [0, 0] : [80, 20]
  );

  return (
    <motion.header
      className={`flex justify-between items-center w-full h-[10svh] max-h-[130px] sticky top-0 z-10`}
      style={{ height }}
    >
      <div className="w-full h-full flex absolute -z-10">
        <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
          <div
            className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full px-10 items-center md:items-start rounded-br-[4svh] `}
          ></div>
        </div>

        <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
          <div
            className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full px-10 items-center justify-end rounded-tl-[4svh]`}
          ></div>
        </div>
      </div>

      <motion.div
        className="flex w-full h-full items-center "
        style={{ paddingLeft: padding, paddingRight: padding }}
      >
        <Link
          href="/"
          className={`h-full basis-1/2 md:basis-auto flex justify-center ${CLICKABLE}`}
        >
          <Logo />
        </Link>
        <nav className="hidden md:flex w-full h-full justify-center gap-40 items-center font-bold font-Hanken text-lg">
          <Link
            href="/marketplace"
            className={`${TEXT_SECONDARY} underline-animation`}
          >
            <UnderlinedAnimatedText lineColor={BACKGROUND_PRIMARY}>
              Boutique
            </UnderlinedAnimatedText>
          </Link>
          <Link href="/contact" className={`${TEXT_PRIMARY}`}>
            <UnderlinedAnimatedText lineColor={BACKGROUND_SECONDARY}>
              Contact
            </UnderlinedAnimatedText>
          </Link>
        </nav>
        <Socials className={`hidden md:flex ${TEXT_PRIMARY}`} />
        <div className="md:hidden flex h-full basis-1/2 items-center justify-end px-10">
          <FontAwesomeIcon icon={faBars} className={` h-1/3 ${TEXT_PRIMARY}`} />
        </div>
      </motion.div>
    </motion.header>
  );
}
