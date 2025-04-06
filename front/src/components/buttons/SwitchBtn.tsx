import React from "react";
import { useSwitch } from "@src/contexts/SwitchContext";
import clsx from "clsx";

export default function SwitchBtn() {
  const { isStudent, toggleRole } = useSwitch();

  return (
    <div className="rounded-full overflow-hidden text-white border-2 border-gray-500 flex w-fit">
      <button
        className={clsx(
          "w-32 px-4 py-2 border-r border-gray-500 transition-all cursor-pointer",
          isStudent ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        )}
        onClick={() => toggleRole()}
      >
        Étudiant
      </button>
      <button
        className={clsx(
          "w-32 px-4 py-2 transition-all cursor-pointer",
          !isStudent ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        )}
        onClick={() => toggleRole()}
      >
        Enseignant
      </button>
    </div>
  );
}
