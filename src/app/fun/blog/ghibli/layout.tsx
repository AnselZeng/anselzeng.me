import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ghibli",
};

export default function GhibliLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

