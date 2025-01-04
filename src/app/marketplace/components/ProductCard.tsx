"use client";
import { BACKGROUND_SECONDARY, TEXT_SECONDARY } from "@/app/constants/colors";
import Image from "next/image";
import { CLICKABLE } from "@/app/constants/style";
import { Product, View } from "../types";

interface ProductCardProps {
  product: Product;
  view: View;
}

export default function ProductCard({ product, view }: ProductCardProps) {
  const { title, imgUrls } = product;
  return (
    <div
      className={`relative rounded-2xl shadow-lg ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} ${CLICKABLE} flex items-center ${
        view === View.Line
          ? "w-full max-w-[800px] h-24"
          : "flex-col aspect-[5/3] basis-full md:basis-[calc((100%-40px)/3)]"
      } overflow-hidden`}
    >
      <div
        className={`relative ${view === View.Line ? "w-2/5 h-full" : "h-4/5 w-full"}`}
      >
        <Image
          alt={`${title} image A`}
          src={imgUrls[0]}
          fill
          sizes="100%"
          className="object-cover object-center"
          priority
        />
        <Image
          alt={`${title} image B`}
          src={imgUrls[1]}
          fill
          sizes="100%"
          className="object-cover object-center absolute z-10 opacity-0 hover:opacity-100 transition-opacity duration-400"
          priority
        />
      </div>
      <div
        className={`p-2 flex grow justify-center items-center ${view === View.Line ? "w-3/5" : "flex-col"}`}
      >
        <h2 className="font-bold font-Libre text-center md:text-lg">{title}</h2>
      </div>
    </div>
  );
}
