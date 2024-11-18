import { CLICKABLE } from "@/app/constants/style";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Contacts() {
  return (
    <div className="flex items-center gap-6 md:flex-col md:items-stretch md:justify-center">
      <Link
        href="mailto:jimmy.andreotti@simylare.com"
        target="_blank"
        className={`flex h-5 w-fit items-center gap-2 ${CLICKABLE}`}
      >
        <FaEnvelope size={20} />
        <p className="hidden md:block">jimmy.andreotti@simylare.com</p>
      </Link>
      <Link
        href="tel:+33665145033"
        className={`flex h-5 w-fit items-center gap-2 ${CLICKABLE}`}
      >
        <FaPhone size={20} />
        <p className="hidden md:block">+33 6 65 14 50 33</p>
      </Link>
    </div>
  );
}
