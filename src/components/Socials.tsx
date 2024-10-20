import { CLICKABLE } from "@/app/constants/style";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={`flex gap-6 h-1/3 ${className}`}>
      <Link
        href={"https://www.instagram.com/simylare.caluire/"}
        target="_blank"
        className="h-full"
      >
        <FontAwesomeIcon icon={faInstagram} className={`${CLICKABLE} h-full`} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/jimmy-andreotti-000772a8/"}
        target="_blank"
        className="h-full"
      >
        <FontAwesomeIcon icon={faLinkedin} className={`${CLICKABLE} h-full`} />
      </Link>
    </div>
  );
}
