import React from "react";

const MaxMin = ({ openMenu }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    openMenu();
  };

  return (
    <div className="w-[80%] sm:w-80 absolute z-10 top-[10%] left-2/4 -translate-x-2/4">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          onClick={() => openMenu()}
          type="button"
          className="absolute top-3 left-2.5 text-acend-theme-dark bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
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
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div className="py-16 px-6 lg:px-8">
          <h3 className="mb-4 text-base font-medium text-acend-theme-dark dark:text-white">
            Enter weight of plastic in Kg
          </h3>
          <form onSubmit={onSubmit} className="space-y-4 py-4">
            <div className="flex items-center space-x-4 px-8">
              <input
                // value={user.username}
                className={` border-[#0F2F1D] w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-4 text-base outline-none`}
                type="number"
                name="username"
                placeholder="Min weight"
                // onChange={onChange}
              />
              <input
                // value={user.username}
                className={` border-[#0F2F1D] w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-4 text-base outline-none`}
                type="number"
                name="username"
                placeholder="Max weight"
                // onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="bg-[#0F2F1D] w-full text-white py-4 px-6 rounded-lg focus:outline-none"
            >
              Add to pool
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MaxMin;
