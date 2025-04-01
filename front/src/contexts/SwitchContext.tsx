"use client";
import React, { createContext, useContext, useState } from "react";

type SwitchContextType = {
  isStudent: boolean;
  toggleRole: () => void;
};

// Create context with default values
const SwitchContext = createContext<SwitchContextType | undefined>(undefined);

// Custom hook to use the context
export const useSwitch = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider");
  }
  return context;
};

// Context Provider
export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isStudent, setIsStudent] = useState(true);

  const toggleRole = () => setIsStudent((prev) => !prev);

  return (
    <SwitchContext.Provider value={{ isStudent, toggleRole }}>
      {children}
    </SwitchContext.Provider>
  );
};
