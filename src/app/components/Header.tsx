import { SECONDARY_BACKGROUND } from "../constants/colors";

export default function Header() {
  return (
    <nav
      className={`flex justify-between items-center px-20 w-screen h-[10svh] ${SECONDARY_BACKGROUND}`}
    >
      <p>logo</p>
      <p>flèche</p>
      <p>socials</p>
    </nav>
  );
}
