import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "telus",
};

export default function TelusLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

