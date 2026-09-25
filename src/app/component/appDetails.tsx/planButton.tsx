"use client";

import { useContext } from "react";

import { toast } from "react-toastify";
import { appContex } from "@/contex/appProvider";
import {  Type } from "@/app/type/type";

interface PlanButtonProps {
  fit: Type;
}

const PlanButton = ({ fit }: PlanButtonProps) => {
  const context = useContext(appContex);

  if (!context) {
    throw new Error("PlanButton must be inside AppProvider");
  }

  const { addPlan, setAddPlan } = context;

  const handleFitPlan = () => {
    const alreadyExists = addPlan.some(
      (item) => item.id === fit.id
    );

    if (alreadyExists) {
      toast.error(`${fit.name} is already in today's plan`);
      return;
    }

    // Store the COMPLETE exercise
    setAddPlan((previousPlan) => [
      ...previousPlan,
      fit,
    ]);

    toast.success(`"${fit.name}" added to today's plan`);
  };


  return (
    <button
      onClick={handleFitPlan}
      className="flex items-center justify-center gap-2 rounded-lg bg-[#CCFF00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b9eb00] active:scale-95"
    >
      <span>＋</span>
      Add to todays plan
    </button>
  );
};

export default PlanButton;