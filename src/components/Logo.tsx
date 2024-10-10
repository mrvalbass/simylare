import Image from "next/image";
import simylare from "@/assets/simylare.svg";

export function Logo({ className }: { className: string }) {
  return (
    <div className={`relative w-28 h-full ${className}`}>
      <Image src={simylare} alt="simylare logo" fill={true} />
    </div>
  );
}
