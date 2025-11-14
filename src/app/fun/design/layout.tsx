import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "design",
};

export default function DesignLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

