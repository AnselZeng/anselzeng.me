import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ansel zeng | harbin",
};

export default function HarbinLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

