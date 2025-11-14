import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "everest",
};

export default function EverestLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

