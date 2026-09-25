"use client";

import { appContex } from "@/contex/appProvider";
import { useContext, useState } from "react";
import PlanCard from "../component/bannerCard/planCard";
import Link from "next/link";
import { Type } from "../type/type";

const Page = () => {
  const context = useContext(appContex);

  if (!context) {
    throw new Error("Page must be inside AppProvider");
  }

  const { addPlan, savePlan } = context;
  const [activePlan, setActivePlan] = useState<"add" | "save">("add");

  // Current active tab data
  const currentPlans = activePlan === "add" ? addPlan : savePlan;

  // Dynamic summary
  const totalExercises = currentPlans.length;

  const totalMinutes = currentPlans.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = currentPlans.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  const [sortBy, setSortBy] = useState("duration");

  const sortBooks = (data: Type[]) => {
    const sortedBooks = [...data];

    if (sortBy === "duration") {
      sortedBooks.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedBooks.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(addPlan);
  const sortedWishlist = sortBooks(savePlan);

  return (
    <>
      <div className="container mx-auto px-5 py-10">
        <div className="pb-8">
          <h2 className="font-bold text-3xl">MY PLAN</h2>
          <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
        <div className="grid w-full container mx-auto grid-cols-1 divide-y divide-[#292d36] rounded-2xl border border-[#292d36] bg-[#12151b] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="p-6">
            <p className="text-sm text-gray-400">Exercises</p>

            <p className="mt-1 text-4xl font-bold text-[#ccff00]">
              {totalExercises}
            </p>
          </div>

          <div className="p-6">
            <p className="text-sm text-gray-400">Minutes</p>

            <p className="mt-1 text-4xl font-bold text-white">{totalMinutes}</p>
          </div>

          <div className="p-6">
            <p className="text-sm text-gray-400">Calories</p>

            <p className="mt-1 text-4xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>

      <div className="text-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-success">
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border w-full">
        {/* Added Plans */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Added Plan (${addPlan.length})`}
          checked={activePlan === "add"}
          onChange={() => setActivePlan("add")}
        />

        <div className="tab-content w-full border-base-300 bg-base-100 p-3 sm:p-6 md:p-10">
          {addPlan.length > 0 ? (
            <div className="w-full space-y-4">
              {sortedReadBooks.map((fit) => (
                <PlanCard key={fit.id} data={fit} planType="add" />
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-lg my-5 ">
              <h2 className="font-bold">NOTHING HERE YET</h2>
              <p>Browse the library and add a lift to get today moving.</p>
              <Link
                href="/homePage"
                className="text-black mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#CCFF00]">
                ← Back to workouts
              </Link>
            </div>
          )}
        </div>

        {/* Saved Plans */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Saved Plans (${savePlan.length})`}        
          checked={activePlan === "save"}        
          onChange={() => setActivePlan("save")}
          
        />

        <div className="tab-content w-full border-base-300 bg-base-100 p-3 sm:p-6 md:p-10">
          {savePlan.length > 0 ? (
            <div className="w-full space-y-4">
              {sortedWishlist.map((fit) => (
                <PlanCard key={fit.id} data={fit} planType="save" />
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-lg">
              <h2 className="font-bold">NOTHING HERE YET</h2>
              <p>Browse the library and add a lift to get today moving.</p>
              <Link
                href="/homePage"
                className="mb-6 text-black inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#CCFF00]">
                ← Back to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
