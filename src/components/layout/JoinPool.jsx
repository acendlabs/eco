import React from "react";
import { requests } from "../data/Data";

const JoinPool = ({ setPool, pool }) => {
  const joinPool = () => {
    setPool([
      ...pool,
      {
        id: "1",
        Weight: "5kg",
      },
    ]);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center md:space-x-8 py-8">
      <h2 className="md:text-2xl font-bold py-8 ">
        Available collectors in pool
      </h2>

      <div className="relative sm:pr-4">
        <button
          onClick={joinPool}
          className="bg-transparent border-[3px] border-acend-theme-dark py-2 px-2 md:px-16 rounded-md text-acend-100 font-semibold space-x-2"
        >
          Join pool
        </button>
        <div className="absolute left-24 sm:left-full  bottom-0 cursor-help tooltip">
          <span class="tooltiptext text-xs">
            Click the join pool button to add the total weight of your plastic
          </span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default JoinPool;
