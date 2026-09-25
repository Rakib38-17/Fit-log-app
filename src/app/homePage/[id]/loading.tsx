const ExerciseDetailsLoading = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Image */}
        <div className="h-80 w-full animate-pulse rounded-2xl bg-[#292d36] lg:h-[500px]" />

        {/* Details */}
        <div className="space-y-5">

          <div className="h-8 w-3/4 animate-pulse rounded bg-[#292d36]" />

          <div className="h-4 w-1/2 animate-pulse rounded bg-[#292d36]" />

          <div className="flex gap-3">
            <div className="h-8 w-20 animate-pulse rounded-full bg-[#292d36]" />
            <div className="h-8 w-20 animate-pulse rounded-full bg-[#292d36]" />
          </div>

          <div className="space-y-3 pt-5">
            <div className="h-4 w-full animate-pulse rounded bg-[#292d36]" />
            <div className="h-4 w-full animate-pulse rounded bg-[#292d36]" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-[#292d36]" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default ExerciseDetailsLoading;