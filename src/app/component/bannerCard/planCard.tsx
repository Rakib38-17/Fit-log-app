"use client";

import Image from "next/image";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

import { appContex } from "@/contex/appProvider";
import { Type } from "@/app/type/type";
import Link from "next/link";

interface PlanCardProps {
  data: Type;
  planType: "add" | "save";
}

const PlanCard = ({ data, planType }: PlanCardProps) => {
  const context = useContext(appContex);

  if (!context) {
    throw new Error("PlanCard must be inside AppProvider");
  }

  const { setAddPlan, setSavePlan } = context;

  const handleDelete = () => {
    if (planType === "add") {
      setAddPlan((previousPlan) =>
        previousPlan.filter((item) => item.id !== data.id)
      );
    } else {
      setSavePlan((previousPlan) =>
        previousPlan.filter((item) => item.id !== data.id)
      );
    }

    toast.success(`"${data.name}" removed`);
  };

  const handleMarkAsDone = () => {
    toast.success(`"${data.name}" marked as done`);
  };

  return (
    <div className="w-full rounded-2xl border border-[#292d36] bg-[#12151b] p-4">
      
      {/* Main Card */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

        {/* Image */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-32">
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="(max-width: 640px) 100vw, 128px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-bold uppercase text-white">
            {data.name}
          </h2>

          <p className="mt-1 truncate text-xs text-gray-400">
            {data.equipment}
          </p>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300">

            <span className="flex items-center gap-1">
              <Clock3
                size={14}
                className="text-[#ccff00]"
              />
              {data.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame
                size={14}
                className="text-[#ccff00]"
              />
              {data.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star
                size={14}
                className="fill-[#ccff00] text-[#ccff00]"
              />
              {data.rating}
            </span>

          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
        
        <Link href={`/homePage/${data.id}`}>
            <button  
            className="rounded-full border border-[#3a414d] px-4 py-2 text-xs text-white transition hover:bg-[#1d222b]"
            > 
            View Details
          </button>
          
        </Link>
          
          <button onClick = {handleMarkAsDone}
            className="flex items-center gap-1 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b9eb00]"
          > 
            <Check size={14} />
            Mark as Done
          </button>

          <button
            onClick={handleDelete}
            className="rounded-full p-2 text-gray-500 transition hover:bg-[#1d222b] hover:text-red-500"
            aria-label={`Remove ${data.name}`}
          >
            <X size={17} />
          </button>

        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="mt-4 flex items-center gap-2 border-t border-[#292d36] pt-3 sm:hidden">

        <Link href={`/homePage/${data.id}`}>
            <button
            className="rounded-full border border-[#3a414d] px-4 py-2 text-xs text-white transition hover:bg-[#1d222b]"
          >
            View Details
          </button>
        </Link>

        <button
          onClick={handleDelete}
          className="rounded-full p-2 text-gray-500 transition hover:bg-[#1d222b] hover:text-red-500"
          aria-label={`Remove ${data.name}`}
        >
          <X size={17} />
        </button>

      </div>
    </div>
  );
};

export default PlanCard;