"use client";

import { LayoutProps } from "@/types/type";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }: LayoutProps) {
  const [showNavModal, setShowNavModal] = useState<boolean>(false);

  const value: any = { showNavModal, setShowNavModal };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
