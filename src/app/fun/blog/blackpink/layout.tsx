import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "az | blackpink",
};

export default function BlackpinkLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

