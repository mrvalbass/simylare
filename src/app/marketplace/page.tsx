"use client";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { useFetch } from "@/hooks/useFetch";

export interface Product {
  title: string;
  description: string;
  quantity: number;
  url: string;
  tags: Array<string>;
  materials: Array<string>;
  price: string;
  imgUrls: Array<string>;
}

export default function MarketPlace() {
  const [lineView, setLineView] = useState<boolean>(false);
  const products = useFetch<Array<Product>>(
    "https://simylare-back.vercel.app/products/listProducts"
  );

  return (
    <main className="min-h-[80svh] md:min-h-[70svh] w-[80%] flex flex-col p-5 mx-auto">
      <Filters lineView={lineView} setLineView={setLineView} />
      <div className="flex flex-wrap py-5 md:px-10 gap-5 overflow-y-auto">
        {products &&
          products.map((product, i) => (
            <ProductCard key={i} product={product} lineView={lineView} />
          ))}
      </div>
    </main>
  );
}
