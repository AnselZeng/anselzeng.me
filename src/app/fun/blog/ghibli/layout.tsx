import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "az | ghibli",
};

export default function GhibliLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

