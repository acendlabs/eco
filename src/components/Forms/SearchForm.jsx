import React from "react";
import { useState } from "react";

const SearchForm = () => {
  const [filter, setFilter] = useState("");
  const onChange = () => {
    console.log();
  };
  return (
    <div>
      <input
        // value={user.username}
        className={`${
          alert.type === "danger"
            ? `border-red-400`
            : alert.type === "success"
            ? `border-green-400`
            : `border-[#0F2F1D]`
        } w-full rounded-lg font-normal border-[3px]  bg-transparent py-3.5 px-8 text-base outline-none`}
        type="text"
        name="username"
        placeholder="Enter a display name"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchForm;
