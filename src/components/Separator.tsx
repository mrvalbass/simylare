export default function Separator({ className }: { className?: string }) {
  return (
    <div className={`w-1/3 mx-auto h-[3px] rounded-full ${className}`}></div>
  );
}
