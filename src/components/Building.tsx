import Image from "next/image";
import building from "@/assets/building.jpg";

export default function Building() {
  return (
    <div className="w-[500px] h-[50svh] relative rounded-xl bg-black/40 flex items-center justify-center">
      <Image
        src={building}
        fill={true}
        alt={"champignons ouvriers en bâtiment"}
        className="object-cover rounded-xl -z-10"
      />
      <p className="text-beige text-2xl font-Libre">Page en construction ...</p>
    </div>
  );
}
