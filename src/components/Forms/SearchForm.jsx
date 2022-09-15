import React from "react";
import { useState } from "react";
import { requests } from "../data/Data";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // console.log(search);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", search);
  };

  return (
    <div className="">
      <form
        onSubmit={onSubmit}
        className="w-full md:w-3/5 flex it items-center rounded-lg font-normal border-[3px] border-acend-theme-dark bg-transparent py-2 px-4 md:px-14 xl:px-6 outline-none text-sm md:text-base"
      >
        <input
          // value={user.username}
          className="w-full py-1.5 bg-transparent outline-transparent text-sm pr-4"
          type="text"
          name="username"
          placeholder="Search for a display name, weight or distance"
          onChange={onChange}
        />
        <button className="flex justify-between items-center bg-acend-theme-dark py-2 px-2 md:px-8 rounded-lg text-white space-x-2">
          <span>Search</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
