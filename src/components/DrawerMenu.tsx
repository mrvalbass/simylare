import { useEffect } from "react";
import { BACKGROUND_SECONDARY, TEXT_SECONDARY } from "@/app/constants/colors";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CLICKABLE } from "@/app/constants/style";
import NavBar from "./NavBar";

const DrawerMenuItems = [
  { link: "/", text: "Accueil", color: `${TEXT_SECONDARY}` },
  { link: "/marketplace", text: "Boutique", color: TEXT_SECONDARY },
  { link: "/contact", text: "Contact", color: TEXT_SECONDARY },
];

export default function DrawerMenu({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 h-[100lvh] w-screen md:hidden z-50 transition-[visibility] duration-500 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 backdrop-blur-[2px] bg-black/30 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      ></div>
      <div
        className={`absolute top-0 right-0 h-full w-1/2 transition-transform duration-500 rounded-l-[4svh] ${BACKGROUND_SECONDARY} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={close}
            className={`h-8 ${CLICKABLE} ${TEXT_SECONDARY}`}
          />
        </div>
        <NavBar
          onClick={close}
          items={DrawerMenuItems}
          className="flex flex-col gap-8 mt-8"
          animated={false}
        />
      </div>
    </div>
  );
}
