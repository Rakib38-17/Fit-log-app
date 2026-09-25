import { Type } from "@/app/type/type";
import Image from "next/image";
import Link from "next/link";

interface dataProbs {
  data: Type;
}

const BannerCard = ({ data }: dataProbs) => {
  return (
<div>
  <Link
    href={`/homePage/${data.id}`}
    className="group block overflow-hidden rounded-xl border border-[#2b2f38] bg-[#15171d] transition-all duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/50 hover:shadow-xl hover:shadow-[#CCFF00]/5"
  >
    {/* Image */}
    <div className="relative h-56 w-full overflow-hidden bg-[#101116] sm:h-52 md:h-56 lg:h-60">
      <Image
        src={data.image}
        alt={data.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover p-2 transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-4">
      {/* Muscle groups */}
      <div className="mb-3 flex flex-wrap gap-2">
        {data.muscleGroups.map((muscle) => (
          <span
            key={muscle}
            className="rounded-full bg-[#CCFF00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
          >
            {muscle}
          </span>
        ))}
      </div>

      {/* Name */}
      <h2 className="text-lg font-bold uppercase text-white transition-colors group-hover:text-[#CCFF00]">
        {data.name}
      </h2>

      {/* Equipment */}
      <p className="mt-1 truncate text-xs text-gray-500">
        {data.equipment}
      </p>

      <div className="my-4 h-px bg-[#282b32]" />

      {/* Stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <span>◷</span>
          {data.duration} min
        </span>

        <span className="flex items-center gap-1">
          <span>◉</span>
          {data.caloriesBurned} kcal
        </span>

        <span className="flex items-center gap-1">
          <span>☆</span>
          {data.rating}
        </span>
      </div>
    </div>
  </Link>
</div>
  );
};

export default BannerCard;
