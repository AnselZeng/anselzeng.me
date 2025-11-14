import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "longines",
};

export default function LonginesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

