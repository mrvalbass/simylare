import Link from "next/link";
import UnderlinedAnimatedText from "./UnderlinedAnimatedText";

interface NavBarItem {
  link: string;
  text: string;
  color: string;
  underlineColor?: string;
}

export default function NavBar({
  className,
  onClick,
  animated,
  items,
}: {
  className?: string;
  onClick?: () => void;
  animated: boolean;
  items: Array<NavBarItem>;
}) {
  return (
    <nav
      className={`flex w-full items-center justify-center gap-40 font-Hanken text-lg font-bold ${className}`}
    >
      {items.map(({ link, text, color, underlineColor }) => (
        <Link
          key={link}
          href={link}
          className={`${color}`}
          onClick={onClick}
          aria-label={text}
        >
          {animated ? (
            <UnderlinedAnimatedText lineColor={underlineColor}>
              {text}
            </UnderlinedAnimatedText>
          ) : (
            text
          )}
        </Link>
      ))}
    </nav>
  );
}
