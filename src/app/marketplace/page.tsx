"use client";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";

export interface Product {
  name: string;
  desc: string;
  img: string;
}

const products: Product[] = [
  {
    name: "Nom 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam nesciunt et corporis placeat in dolorum, fugiat eos corrupti!",
    img: "/assets/building.jpg",
  },
  {
    name: "Nom 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam nesciunt et corporis placeat in dolorum, fugiat eos corrupti!",
    img: "/assets/building.jpg",
  },
  {
    name: "Nom 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam nesciunt et corporis placeat in dolorum, fugiat eos corrupti!",
    img: "/assets/building.jpg",
  },
  {
    name: "Nom 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam nesciunt et corporis placeat in dolorum, fugiat eos corrupti!",
    img: "/assets/building.jpg",
  },
];

export default function MarketPlace() {
  const [lineView, setLineView] = useState<boolean>(false);
  return (
    <main className="min-h-[80svh] md:min-h-[70svh] max-w-[1250px] flex flex-col p-5 mx-auto">
      <Filters lineView={lineView} setLineView={setLineView} />
      <div className="flex flex-wrap py-5 md:px-10 gap-5 overflow-y-auto">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} lineView={lineView} />
        ))}
      </div>
    </main>
  );
}
