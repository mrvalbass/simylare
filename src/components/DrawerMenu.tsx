import { useEffect } from "react";
import { BACKGROUND_SECONDARY, TEXT_SECONDARY } from "@/app/constants/colors";
import { CLICKABLE } from "@/app/constants/style";
import NavBar from "./NavBar";
import { FaArrowRight, FaEnvelope, FaHouse } from "react-icons/fa6";
import { TbMushroomFilled } from "react-icons/tb";

const DrawerMenuItems = [
  { link: "/", text: "Accueil", color: `${TEXT_SECONDARY}`, icon: <FaHouse /> },
  {
    link: "/marketplace",
    text: "Boutique",
    color: TEXT_SECONDARY,
    icon: <TbMushroomFilled />,
  },
  {
    link: "/contact",
    text: "Contact",
    color: TEXT_SECONDARY,
    icon: <FaEnvelope />,
  },
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
      className={`fixed left-0 top-0 z-50 h-[100lvh] w-screen transition-[visibility] duration-500 md:hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      ></div>
      <div
        className={`absolute right-0 top-0 flex h-full w-1/2 flex-col items-center rounded-l-[4svh] transition-transform duration-500 ${BACKGROUND_SECONDARY} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end self-end p-4">
          <FaArrowRight
            onClick={close}
            className={`${CLICKABLE} ${TEXT_SECONDARY}`}
            size={30}
          />
        </div>
        <NavBar
          onClick={close}
          items={DrawerMenuItems}
          className="mt-8 flex !w-2/3 flex-col items-stretch gap-8"
          animated={false}
          icons
        />
      </div>
    </div>
  );
}
