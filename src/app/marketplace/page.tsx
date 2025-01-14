"use client";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { useFetch } from "@/hooks/useFetch";
import SkeletonProductCard from "./components/SkeletonProductCard";
import { Product, View } from "./types";
import { useCookie } from "@/hooks/useCookie";
import { useRouter } from "next/navigation";

export default function MarketPlace() {
  const router = useRouter();
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

  const handleProductCardClick = (productId: number, product: Product) => {
    router.push(`/marketplace/${productId}?product=${JSON.stringify(product)}`);
  };

  if (!view) {
    return;
  }

  return (
    <main className="grow w-[80%] flex flex-col p-5 mx-auto">
      <Filters view={view} toggleView={toggleView} />
      <div
        className={`flex flex-wrap py-5 md:px-10 gap-5 overflow-y-auto ${view === View.Line ? "justify-center" : ""}`}
      >
        {loading &&
          [...Array(1)].map((_, i) => (
            <SkeletonProductCard key={i} view={view} />
          ))}
        {Array.isArray(products) &&
          products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              view={view}
              onClick={() => handleProductCardClick(i, product)}
            />
          ))}
      </div>
    </main>
  );
}
