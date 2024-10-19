"use client";
import { BACKGROUND_SECONDARY, TEXT_SECONDARY } from "@/app/constants/colors";
import type { Product } from "../page";
import Image from "next/image";
import building from "../../../assets/building.jpg";
import { CLICKABLE } from "@/app/constants/style";

interface ProductCardProps {
  product: Product;
  lineView: boolean;
}

export default function ProductCard({ product, lineView }: ProductCardProps) {
  return (
    <div
      className={`rounded-lg ${BACKGROUND_SECONDARY} ${TEXT_SECONDARY} ${CLICKABLE} flex ${
        lineView
          ? "w-full"
          : "flex-col basis-full md:basis-[calc((100%-40px)/3)]"
      } overflow-hidden`}
    >
      <div
        className={`relative ${
          lineView ? "h-24 w-1/3" : "h-36 md:h-48 w-full"
        }`}
      >
        <Image
          alt={`${product.name} image`}
          src={building}
          fill
          className="object-cover"
        />
      </div>
      <div className={`p-2 flex ${lineView ? "items-center" : "flex-col"}`}>
        <h2 className="font-bold px-6 whitespace-nowrap">{product.name}</h2>
        <p className="hidden md:block ">{product.desc}</p>
      </div>
    </div>
  );
}
