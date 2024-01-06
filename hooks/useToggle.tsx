"use client";

import { useState } from "react";

export const useToggle = () => {
  const [isTrue, setToggle] = useState(false);

  const dispatchToggle = () => {
    setToggle((prev) => !prev);
  };

  return {
    isTrue,
    dispatchToggle,
  };
};
