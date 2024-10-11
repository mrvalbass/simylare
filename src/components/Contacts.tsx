import { CLICKABLE } from "@/app/constants/style";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="flex md:flex-col gap-6 items-center md:items-stretch md:justify-center">
      <Link
        href="mailto:jimmy.andreotti@simylare.com"
        target="_blank"
        className={`flex w-fit h-5 items-center gap-2 ${CLICKABLE}`}
      >
        <FontAwesomeIcon icon={faEnvelope} className="h-full" />
        <p className="hidden md:block">jimmy.andreotti@simylare.com</p>
      </Link>
      <Link
        href="tel:+33665145033"
        className={`flex w-fit h-5 items-center gap-2 ${CLICKABLE}`}
      >
        <FontAwesomeIcon icon={faPhone} className="h-full" />
        <p className="hidden md:block">+33 6 65 14 50 33</p>
      </Link>
    </div>
  );
}
