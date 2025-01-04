import { View } from "../types";

interface SkeletonProductCardProps {
  view: View;
}

export default function SkeletonProductCard({
  view,
}: SkeletonProductCardProps) {
  return (
    <div
      className={`rounded-2xl animate-pulse-fast bg-black/30  ${
        view === View.Line
          ? "w-full max-w-[800px] h-24 mx-auto"
          : "h-60 basis-full md:basis-[calc((100%-40px)/3)]"
      }`}
    ></div>
  );
}
