import React from "react";

const ConnectWallet = ({ setOpenModal, openModal }) => {
  return (
    <div className="absolute flex z-10 top-[20%] left-2/4 -translate-x-2/4 bg-acend-25 rounded-lg py-16 px-16">
      <button onClick={() => setOpenModal(!openModal)}>
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
      ConnectWallet
    </div>
  );
};

export default ConnectWallet;
