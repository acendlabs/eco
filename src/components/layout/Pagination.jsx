import React from "react";

const Pagination = () => {
  // const onSelect = (e) => null;
  return (
    <div className="flex justify-center h-24 items-center text-xs md:text-base">
      {/* <div>showing 1 - 5</div> */}
      <div className="flex justify-between text-center">
        <div className="cursor-pointer mr-8">
          <span className="bg-acend-25 rounded-full p-3 w-9 h-9 flex justify-center items-center ">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center space-x-1.5 w-auto">
          {/* <p className=" rounded-full p-3 w-9 h-9 flex justify-center items-center cursor-pointer">
            1
          </p>
          <p className=" rounded-full p-3 w-9 h-9 flex justify-center items-center cursor-pointer">
            -
          </p>
          <p className="rounded-full p-3 w-9 h-9 flex justify-center items-center cursor-pointer">
            10
          </p> */}
          <span className="cursor-pointer">1</span>
          <span className="cursor-pointer">-</span>
          <span className="cursor-pointer">10</span>
          <span className="cursor-pointer">of</span>
          <span className="cursor-pointer">30</span>
        </div>
        <div className="cursor-pointer ml-8">
          <span className="bg-acend-100 text-white rounded-full ml-2 p-3 w-9 h-9 flex justify-center items-center ">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* <div className="flex items-center space-x-2">
        <p>Show</p> */}

      {/* <div className="relative">
          <select
            className="appearance-none mr-1 block w-full px-4 py-2.5 font-normal bg-acend-25 rounded-3xl transition ease-in-out focus:bg-acend-25 focus:outline-none"
            onChange={onSelect}
          >
            <option value={``}>10</option>
            <option value={``}>20</option>
            <option value={``}>30</option>
          </select>
          <button className="absolute top-3.5 right-2.5" onChange={onSelect}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-2 h-2 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Pagination;
