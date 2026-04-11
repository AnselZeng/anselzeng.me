import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "az | longines",
};

export default function LonginesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

