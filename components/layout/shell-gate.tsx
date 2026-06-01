"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

export function ShellGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}</>;
  return <AppShell>{children}</AppShell>;
}
