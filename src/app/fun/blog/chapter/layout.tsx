import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "az | chapter",
};

export default function ChapterLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

