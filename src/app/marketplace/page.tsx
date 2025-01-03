"use client";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { useFetch } from "@/hooks/useFetch";
import SkeletonProductCard from "./components/SkeletonProductCard";

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

export enum View {
  Line = "line",
  Grid = "grid",
}

export default function MarketPlace() {
  const [lineView, setLineView] = useState<boolean>(
    localStorage.getItem("marketplaceView") === View.Line || false
  );
  const { loading, data: products } = useFetch<Array<Product>>(
    "https://simylare-back.vercel.app/products/listProducts"
  );

  const toggleView = (view: View) => {
    localStorage.setItem("marketplaceView", view);
    setLineView(view === View.Line);
  };

  return (
    <main className="min-h-[80svh] md:min-h-[70svh] w-[80%] flex flex-col p-5 mx-auto">
      <Filters lineView={lineView} toggleView={toggleView} />
      <div className="flex flex-wrap py-5 md:px-10 gap-5 overflow-y-auto">
        {loading &&
          [...Array(1)].map((_, i) => (
            <SkeletonProductCard key={i} lineView={lineView} />
          ))}
        {Array.isArray(products) &&
          products.map((product, i) => (
            <ProductCard key={i} product={product} lineView={lineView} />
          ))}
      </div>
    </main>
  );
}
