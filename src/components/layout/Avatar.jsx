import React from "react";
import avatar from "../../images/pictureavatar.png";

const Avatar = ({ file, onFileChange, remove }) => {
  return (
    <div className="relative w-auto md:w-5/12 lg:w-[30%] space-y-8">
      <img
        className={`rounded-full ${
          !file?.data ? `p-8` : `w-[140px] h-[140px]`
        } border-[5px] border-[#0F2F1D]`}
        src={file?.data ?? avatar}
        alt=""
      />

      <input
        style={{ display: "none" }}
        type="file"
        id="file"
        accept="image/*"
        onChange={onFileChange}
      />
      <label
        className="absolute left-[120px] -top-12 cursor-pointer"
        htmlFor="file"
      >
        <h1 className="font-semibold">Change avater</h1>
        <svg
          width="26"
          height="25"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.343 19H2.34302V5H11.343V3H2.34302C1.24302 3 0.343018 3.9 0.343018 5V19C0.343018 20.1 1.24302 21 2.34302 21H16.343C17.443 21 18.343 20.1 18.343 19V10H16.343V19ZM8.55302 15.83L6.59302 13.47L3.84302 17H14.843L11.303 12.29L8.55302 15.83ZM18.343 3V0H16.343V3H13.343C13.353 3.01 13.343 5 13.343 5H16.343V7.99C16.353 8 18.343 7.99 18.343 7.99V5H21.343V3H18.343Z"
            fill="#0F2F1D"
          />
        </svg>
      </label>
      <button className="font-bold text-lg text-[#2C8C57]" onClick={remove}>
        Remove avatar
      </button>
    </div>
  );
};

export default Avatar;
