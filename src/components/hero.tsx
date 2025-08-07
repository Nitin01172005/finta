import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="px-4 py-21 flex flex-col items-center">
      <div className="flex gap-3 border border-gray-200 rounded-2xl items-center bg-neutral-100 hover:bg-gray-300/30 transition duration-100 font-bold text-xs px-4 py-1 cursor-pointer">
        QSBS just got better in July 2025
        <FaArrowRight />
      </div>

      <div>
        <h1 className="text-6xl pt-14 mx-auto text-black font-semibold text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <h2 className="text-lg pt-5 mx-auto text-neutral-700 text-center">
          Automated bookkeeping, effortless tax filing, real-time insights.
          <br /> Set up in 10 mins. Back to building by 1:19am.
        </h2>
      </div>
      <div className="flex py-5 gap-2">
        <button className="px-4 cursor-pointer bg-[#2579f4]  hover:bg-[#256af4] text-white font-medium text-sm rounded-lg py-2 text-md text-shadow-md shadow-lg">
          Start free trial
        </button>
        <button className="px-4 cursor-pointer flex items-center bg-transparent hover:bg-gray-300 text-black text-sm font-medium rounded-lg py-2 text-md">
          Pricing <FaArrowRight />
        </button>
      </div>
      <h3 className="text-xs font-semibold pt-3 mx-auto text-neutral-400 text-center">
        Currently for US-based Delaware C-Corps.
      </h3>
    </div>
  );
};

export default Hero;