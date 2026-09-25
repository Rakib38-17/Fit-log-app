"use client";

import { useContext } from "react";
import Link from "next/link";
import { appContex } from "@/contex/appProvider";

const DynamicNav = () => {
  const context = useContext(appContex);

  if (!context) {
    throw new Error("Navbar must be inside AppProvider");
  }

  const { addPlan, savePlan } = context;

  return (
    <nav className="flex items-center justify-center gap-8 p-5">

      {/* Plan */}
      <Link
        href="../bannerCard/planCard.tsx"
        className="flex items-center gap-2 text-gray-300 rounded-2xl"
      >
        <span>Plan</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
          {addPlan.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="../bannerCard/saveCard.tsx"
        className="flex items-center gap-2 text-gray-300 rounded-2xl"
      >
        <span>Saved</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-300">
          {savePlan.length}
        </span>
      </Link>

    </nav>
  );
};

export default  DynamicNav;