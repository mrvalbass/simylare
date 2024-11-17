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
import { CLICKABLE } from "../app/constants/style";
import NavBar from "./NavBar";
import DrawerMenu from "./DrawerMenu";
import { useState } from "react";

const navBarMenuItems = [
  {
    link: "/marketplace",
    text: "Boutique",
    color: TEXT_SECONDARY,
    underlineColor: BACKGROUND_PRIMARY,
  },
  {
    link: "/contact",
    text: "Contact",
    color: TEXT_PRIMARY,
    underlineColor: BACKGROUND_SECONDARY,
  },
];

export default function Header() {
  const [isDrawerOpen, setDrawerIsOpen] = useState<boolean>(false);

  const openMenu = () => setDrawerIsOpen(true);
  const closeMenu = () => setDrawerIsOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-10 flex h-[8vh] max-h-[130px] w-full items-center justify-between scroll-smooth md:h-[12svh]`}
      >
        <div className="absolute inset-0 -z-10 flex">
          <div className={`h-full w-1/2 ${BACKGROUND_PRIMARY}`}>
            <div
              className={`flex ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} h-full items-center rounded-br-[4svh] px-10 md:items-start`}
            ></div>
          </div>

          <div className={`h-full w-1/2 ${BACKGROUND_SECONDARY}`}>
            <div
              className={`flex ${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} h-full items-center justify-end rounded-tl-[4svh] px-10`}
            ></div>
          </div>
        </div>

        <div className="flex h-full w-full items-center md:px-24">
          <Link
            href="/"
            className={`flex h-full basis-1/2 justify-center md:basis-auto ${CLICKABLE}`}
            aria-label="Retour à l'accueil"
          >
            <Logo />
          </Link>
          <NavBar className="hidden md:flex" items={navBarMenuItems} animated />
          <Socials className={`hidden md:flex ${TEXT_PRIMARY}`} />
          <div className="flex h-full basis-1/2 items-center justify-end px-10 md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className={`h-1/3 ${TEXT_PRIMARY} ${CLICKABLE}`}
              onClick={openMenu}
              aria-label="Ouvrir le menu"
            />
          </div>
        </div>
      </header>
      <DrawerMenu isOpen={isDrawerOpen} close={closeMenu} />
    </>
  );
}
