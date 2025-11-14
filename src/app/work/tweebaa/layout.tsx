import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "tweebaa",
};

export default function TweebaaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

