import { CLICKABLE } from "@/app/constants/style";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={`flex h-1/3 gap-6 ${className}`}>
      <Link
        href={"https://www.instagram.com/simylare.caluire/"}
        target="_blank"
        className="h-full"
      >
        <FaInstagram className={`${CLICKABLE}`} size={35} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/jimmy-andreotti-000772a8/"}
        target="_blank"
        className="h-full"
      >
        <FaLinkedin className={`${CLICKABLE}`} size={35} />
      </Link>
    </div>
  );
}
