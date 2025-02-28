"use client";
import { useSearchParams } from "next/navigation";
import type { Product } from "../types";
import Image from "next/image";
import HighLightedText, { Intent } from "@/components/HighlightedText";
import {
  BACKGROUND_CTA,
  BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  TEXT_CTA,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "@/app/constants/colors";
import Link from "next/link";
import { FaEtsy } from "react-icons/fa6";
import he from "he";

export default function Product() {
  const searchParams = useSearchParams();
  const productString = searchParams.get("product");
  if (!productString) {
    return;
  }
  const { title, description, imgUrls, url, price, quantity }: Product =
    JSON.parse(decodeURIComponent(he.decode(productString)));

  return (
    <main className="flex flex-col grow items-center">
      <div className="w-[75%] max-w-[1000px] m-12 flex flex-col gap-6 md:gap-12 items-center">
        <h1 className="font-Libre font-bold text-lg md:text-2xl self-center">
          <HighLightedText intent={Intent.Secondary}>{title}</HighLightedText>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 self-center">
          {imgUrls.map((imgUrl, i) => (
            <div key={i} className="relative w-[250px] aspect-square">
              <Image
                src={imgUrl}
                alt={`${title} image ${i}`}
                fill
                sizes="100%"
                className="object-cover object-center rounded-xl"
              />
            </div>
          ))}
        </div>
        <Link
          href={url}
          target="_blank"
          className={`flex items-center gap-2 ${BACKGROUND_CTA} p-3 rounded-lg ${TEXT_SECONDARY} font-Hanken text-lg text-center`}
        >
          <FaEtsy
            className={`${BACKGROUND_PRIMARY} ${TEXT_CTA} p-1 rounded-md font-Hanken`}
            size={30}
          />
          Buy on Etsy
        </Link>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col gap-1 justify-center items-center basis-1/2 md:order-last">
            <p className={`${TEXT_PRIMARY} font-Hanken text-2xl font-bold`}>
              {price.replace("EUR", "€")}
            </p>
            <p>-</p>
            <p className={`${TEXT_PRIMARY} font-Hanken`}>
              {quantity > 0 ? "🟢 En stock" : "🔴 Victime de son succès"}
            </p>
          </div>
          <div
            className={`font-Hanken text-lg md:text-xl px-8 py-4 rounded-xl basis-1/2 ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} flex items-center`}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
