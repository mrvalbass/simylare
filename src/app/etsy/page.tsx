import Link from "next/link";
import {
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "../constants/colors";
import { FaEtsy } from "react-icons/fa6";

export default function MarketPlace() {
  return (
    <main className="min-h-[80svh] md:min-h-[70svh] flex items-center justify-center">
      <Link
        href="http://simylare-back.vercel.app/auth/etsy"
        className={`${BACKGROUND_SECONDARY} px-3 py-2 rounded-xl flex items-center gap-3`}
        target="_blank"
      >
        <FaEtsy
          className={`${BACKGROUND_PRIMARY} ${TEXT_PRIMARY} p-1 rounded-md`}
          size={30}
        />
        <p className={`${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} py-2`}>
          Connect to Etsy
        </p>
      </Link>
    </main>
  );
}
