import React, { useRef, useEffect } from "react";

const useClickOutside = (
  com: React.RefObject<HTMLElement | null>,
  onClick: () => void,
  exceptionRef?: React.RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    const handleClickListener = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInside = com?.current?.contains(target);
      const clickedException = exceptionRef?.current?.contains(target);

      if (!clickedInside && !clickedException) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [com, exceptionRef, onClick]);
};

export default useClickOutside;
