export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={`w-1/3 mx-auto h-[3px] rounded-full ${className} my-5 md:my-10`}
    ></div>
  );
}
