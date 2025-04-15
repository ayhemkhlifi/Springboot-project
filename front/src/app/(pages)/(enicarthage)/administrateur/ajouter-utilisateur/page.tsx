// src/app/admin/page.tsx
"use client";

import { useState } from "react";
import { SwitchContext } from "@src/contexts/SwitchContext";
import SwitchButton from "@src/components/buttons/SwitchBtn";
import FormContainer from "@src/components/forms/FormContainer";

export default function AdminPage() {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <SwitchContext.Provider value={{
      isStudent,
      toggleSwitch: () => setIsStudent(!isStudent)
    }}>
      <div className="flex-center flex-col gap-5 w-full h-full p-4 bg-gray-50">
        <SwitchButton />
        <FormContainer />
      </div>
    </SwitchContext.Provider>
  );
}