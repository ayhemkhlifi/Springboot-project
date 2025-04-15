"use client";
import { createContext } from "react";

export interface SwitchContextType {
  isStudent: boolean;
  toggleSwitch: () => void;
}

export const SwitchContext = createContext<SwitchContextType>({
  isStudent: true,
  toggleSwitch: () => {},
});