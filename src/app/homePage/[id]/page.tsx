
import PlanButton from "@/app/component/appDetails.tsx/planButton";
import SaveButton from "@/app/component/appDetails.tsx/saveButton";
import { Type } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


const getData = async (): Promise<Type[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Data cannot be fetched");
  }
  const data: Type[] = await res.json();

  return data;
};

const FitLogDetailsPage = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params;

  const fitData = await getData();

  const fit = fitData.find(
    (data) => data.id === Number(id)
  );

  if (!fit) {
    notFound();
  }

  return (
  <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back button */}
        <Link
          href="/homePage"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#CCFF00]"
        >
          ← Back to workouts
        </Link>

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-2xl border border-[#292d36] bg-[#11141a] md:grid-cols-2">

          <div className="relative min-h-[350px] w-full md:min-h-[600px]">
            <Image
              src={fit.image}
              alt={fit.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col p-5 sm:p-7 lg:p-9">

   
            <div>
              <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                {fit.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
                {fit.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {fit.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#292d36] bg-[#161920]">

              <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Equipment
                </span>

                <span className="text-xs text-white">
                  {fit.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Difficulty
                </span>

                <span className="text-xs text-white">
                  {fit.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Sets
                </span>

                <span className="text-xs text-white">
                  {fit.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Reps
                </span>

                <span className="text-xs text-white">
                  {fit.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Duration
                </span>

                <span className="text-xs text-white">
                  {fit.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292d36] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Calories
                </span>

                <span className="text-xs text-white">
                  {fit.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Rating
                </span>

                <span className="text-xs text-white">
                  ★ {fit.rating}
                </span>
              </div>

            </div>

            <div className="mt-6">
              <h2 className="text-sm font-bold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {fit.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-relaxed text-gray-400"
                    >
                      <span className="shrink-0 text-[#CCFF00]">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <PlanButton  fit = {fit}></PlanButton>

              <SaveButton   fit = {fit}></SaveButton>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default FitLogDetailsPage;
