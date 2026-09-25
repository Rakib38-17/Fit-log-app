"use client";
import { useContext } from "react";

import { toast } from "react-toastify";
import { appContex } from "@/contex/appProvider";
import { Type } from "@/app/type/type";

interface PlanButtonProps {
  fit: Type;
}

const SaveButton  = ({ fit }: PlanButtonProps) => {
  const context = useContext(appContex);

  if (!context) {
    throw new Error("PlanButton must be inside AppProvider");
  }

  const { savePlan, setSavePlan } = context;

  const handleFitPlans = () => {
    const alreadyExists =savePlan.some(
      (item) => item.id === fit.id
    );

    if (alreadyExists) {
      toast.error(`${fit.name} is already saved`);
      return;
    }

    // Store the COMPLETE exercise
    setSavePlan((previousPlan) => [
      ...previousPlan,
      fit,
    ]);

    toast.success(`"${fit.name}" saved for later`);
  };


    return (
        <div>
            <button onClick= {handleFitPlans}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#3a3e48] px-5 py-3 text-xs font-medium text-white transition hover:bg-[#1b1e25] active:scale-95"
              >
                ♧
                Save for later
              </button>
        </div>
    );
};

export default SaveButton;