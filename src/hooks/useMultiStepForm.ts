"use client"
import { useState } from "react";

export function useMultiStepForm(
  totalSteps: number
) {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return {
    step,
    next,
    previous,
    isFirst: step === 0,
    isLast: step === totalSteps - 1,
  };
}