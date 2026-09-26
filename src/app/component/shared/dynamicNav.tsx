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
    <nav className="flex items-center justify-center gap-4 p-5">

      {/* Plan */}
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-300 rounded-2xl ]"
      >
        <span>Plan</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full  font-bold border bg-[#CCFF00] text-black">
          {addPlan.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-300 rounded-2xl"
      >
        <span>Saved</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border  text-gray-300">
          {savePlan.length}
        </span>
      </Link>

    </nav>
  );
};

export default  DynamicNav;