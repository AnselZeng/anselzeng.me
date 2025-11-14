import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ansel zeng | blackpink",
};

export default function BlackpinkLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

