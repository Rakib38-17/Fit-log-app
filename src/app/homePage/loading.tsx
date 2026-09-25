const HomePageLoading = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Heading skeleton */}
      <div className="mb-8 h-10 w-48 animate-pulse rounded-lg bg-[#292d36]" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-xl border border-[#292d36] bg-[#15171d]"
          >
            {/* Image */}
            <div className="h-56 w-full animate-pulse bg-[#292d36]" />

            {/* Content */}
            <div className="space-y-3 p-4">

              <div className="h-3 w-20 animate-pulse rounded bg-[#292d36]" />

              <div className="h-5 w-3/4 animate-pulse rounded bg-[#292d36]" />

              <div className="h-3 w-1/2 animate-pulse rounded bg-[#292d36]" />

              <div className="mt-5 h-px bg-[#292d36]" />

              <div className="flex justify-between">
                <div className="h-3 w-14 animate-pulse rounded bg-[#292d36]" />
                <div className="h-3 w-14 animate-pulse rounded bg-[#292d36]" />
                <div className="h-3 w-10 animate-pulse rounded bg-[#292d36]" />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HomePageLoading;