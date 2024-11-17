import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CLICKABLE } from "@/app/constants/style";

export default function UnderlinedAnimatedText({
  children,
  lineColor,
}: {
  children: ReactNode;
  lineColor?: string;
}) {
  return (
    <motion.div
      className={`relative rounded-full ${CLICKABLE}`}
      initial="rest"
      whileHover="hover"
    >
      {children}
      <motion.span
        className={`absolute bottom-0 left-0 h-0.5 ${lineColor}`}
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
