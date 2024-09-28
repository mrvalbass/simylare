import type { Metadata } from "next";
import "./globals.css";
import { BACKGROUND } from "./constants/colors";

export const metadata: Metadata = {
  title: "Simylare - Explorateur du royaume fongique",
  description:
    "SIMYLARE : Entreprise dédiée aux champignons et à leur potentiel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${BACKGROUND}`}>{children}</body>
    </html>
  );
}
