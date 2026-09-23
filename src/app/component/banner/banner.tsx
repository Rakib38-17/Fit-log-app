import Image from 'next/image';
import banner from "@/app/assets/banner.png";

const Banner = () => {
    return (
        <>
        <div className="bg-[#222630] mt-15 mb-15 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Content */}
        <div className="w-full md:w-1/2 max-w-9xl  space-y-5 sm:space-y-6 text-center md:text-left">
          <p className="text-[#CCFF00] font-semibold tracking-wider">
            WORKOUT LIBRARY
          </p>

          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the weeks&apos; work add up.
          </p>

          <button className="bg-[#CCFF00] text-black font-semibold rounded-xl px-6 py-3 hover:bg-[#b8e600] transition duration-300">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={banner}
            alt="Workout banner"
            width={400}
            height={500}
            className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
        </>
    );
};

export default Banner;