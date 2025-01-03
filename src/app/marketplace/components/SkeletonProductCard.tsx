interface SkeletonProductCardProps {
  lineView: boolean;
}

export default function SkeletonProductCard({
  lineView,
}: SkeletonProductCardProps) {
  return (
    <div
      className={`rounded-2xl animate-pulse-fast bg-black/30  ${
        lineView
          ? "w-full max-w-[800px] h-24 mx-auto"
          : "h-60 basis-full md:basis-[calc((100%-40px)/3)]"
      }`}
    ></div>
  );
}
