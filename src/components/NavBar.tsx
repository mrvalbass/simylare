import Link from "next/link";
import UnderlinedAnimatedText from "./UnderlinedAnimatedText";

interface NavBarItem {
  link: string;
  text: string;
  color: string;
  icon?: JSX.Element;
  underlineColor?: string;
}

export default function NavBar({
  className,
  onClick,
  animated,
  icons,
  items,
}: {
  className?: string;
  onClick?: () => void;
  animated: boolean;
  icons?: boolean;
  items: Array<NavBarItem>;
}) {
  return (
    <nav
      className={`flex w-full items-center justify-center gap-40 font-Hanken text-lg font-bold ${className}`}
    >
      {items.map(({ link, text, color, underlineColor, icon }) => (
        <Link
          key={link}
          href={link}
          className={`${color} flex items-center gap-4`}
          onClick={onClick}
          aria-label={text}
        >
          {icons && icon}
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
