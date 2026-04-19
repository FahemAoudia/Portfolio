"use client";

import { LocaleProvider } from "@/contexts/LocaleProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
