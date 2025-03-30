"use client";
import SwitchBtn from "@src/components/buttons/SwitchBtn";
import AddProfesseur from "@src/components/forms/AddProfesseur";
import AddEtudiant from "@src/components/forms/AddEtudiant";
import { SwitchProvider, useSwitch } from "@src/contexts/SwitchContext";
import React from "react";

function PageContent() {
  const { isStudent } = useSwitch();

  return (
    <div className="flex-center flex-col gap-5 w-full h-full">
      <SwitchBtn />
      <div className="w-full h-full flex-center">
        {isStudent ? <AddEtudiant /> : <AddProfesseur />}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <SwitchProvider>
      <PageContent />
    </SwitchProvider>
  );
}
