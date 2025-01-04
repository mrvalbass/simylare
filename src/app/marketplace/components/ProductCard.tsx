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
      className={`rounded-2xl shadow-lg ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} ${CLICKABLE} flex items-center ${
        view === View.Line
          ? "w-full max-w-[800px] mx-auto"
          : "flex-col basis-full md:basis-[calc((100%-40px)/3)]"
      } overflow-hidden`}
    >
      <div
        className={`relative ${view === View.Line ? "h-24 basis-1/4" : "h-36 md:h-48 w-full"}`}
      >
        <Image
          alt={`${title} image`}
          src={imgUrls[0]}
          fill
          sizes="100%"
          className="object-cover object-center"
          priority
        />
      </div>
      <div
        className={`p-2 flex justify-center items-center ${view === View.Line ? "basis-3/4" : "flex-col"}`}
      >
        <h2 className="font-bold font-Libre text-center">{title}</h2>
      </div>
    </div>
  );
}
