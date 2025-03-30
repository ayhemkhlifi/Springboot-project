"use client";

import { useState, useEffect } from "react";

type UserRole = "student" | "administration" | "prof";

const useWhoami = (): UserRole => {
  const [role, setRole] = useState<UserRole>("student");

  useEffect(() => {
    try {
      const storedRole = localStorage.getItem("whoami");
      if (isValidRole(storedRole)) {
        setRole(storedRole as UserRole);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  return role;
};

// Type guard for UserRole
const isValidRole = (value: unknown): value is UserRole => {
  return typeof value === "string" && ["student", "administration", "prof"].includes(value);
};

export default useWhoami;
