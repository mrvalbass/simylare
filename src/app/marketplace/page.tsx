"use client";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { useFetch } from "@/hooks/useFetch";
import SkeletonProductCard from "./components/SkeletonProductCard";
import { Product, View } from "./types";
import { useCookie } from "@/hooks/useCookie";

export default function MarketPlace() {
  const { value: view, setCookie: setSavedView } = useCookie<View>(
    "marketplaceView",
    View.Grid
  );

  const { loading, data: products } = useFetch<Array<Product>>(
    "https://simylare-back.vercel.app/products/listProducts"
  );

  const toggleView = (view: View) => {
    setSavedView(view);
  };

  if (!view) {
    return;
  }

  return (
    <main className="min-h-[80svh] md:min-h-[70svh] w-[80%] flex flex-col p-5 mx-auto">
      <Filters view={view} toggleView={toggleView} />
      <div className="flex flex-wrap py-5 md:px-10 gap-5 overflow-y-auto">
        {loading &&
          [...Array(1)].map((_, i) => (
            <SkeletonProductCard key={i} view={view} />
          ))}
        {Array.isArray(products) &&
          products.map((product, i) => (
            <ProductCard key={i} product={product} view={view} />
          ))}
      </div>
    </main>
  );
}
