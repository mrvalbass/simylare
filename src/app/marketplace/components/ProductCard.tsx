"use client";
import { BACKGROUND_SECONDARY, TEXT_SECONDARY } from "@/app/constants/colors";
import Image from "next/image";
import { CLICKABLE } from "@/app/constants/style";
import { Product } from "../page";

interface ProductCardProps {
  product: Product;
  lineView: boolean;
}

export default function ProductCard({ product, lineView }: ProductCardProps) {
  const { title, imgUrls } = product;
  return (
    <div
      className={`rounded-2xl shadow-lg ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} ${CLICKABLE} flex items-center ${
        lineView
          ? "w-full max-w-[800px] mx-auto"
          : "flex-col basis-full md:basis-[calc((100%-40px)/3)]"
      } overflow-hidden`}
    >
      <div
        className={`relative ${lineView ? "h-24 basis-1/4" : "h-36 md:h-48 w-full"}`}
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
        className={`p-2 flex justify-center items-center ${lineView ? "basis-3/4" : "flex-col"}`}
      >
        <h2 className="font-bold font-Libre text-center">{title}</h2>
      </div>
    </div>
  );
}
