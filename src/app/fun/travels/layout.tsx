import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "travels",
};

export default function TravelsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

