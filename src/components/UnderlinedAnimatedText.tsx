import type { ReactNode } from "react";
import * as motion from "framer-motion/client";
import { CLICKABLE } from "@/app/constants/style";

export function UnderlinedAnimatedText({
  children,
  lineColor,
}: {
  children: ReactNode;
  lineColor: string;
}) {
  return (
    <motion.div
      className={`relative rounded-full ${CLICKABLE}`}
      initial="rest"
      whileHover="hover"
    >
      {children}
      <motion.span
        className={`absolute left-0 bottom-0 h-0.5 ${lineColor}`}
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
