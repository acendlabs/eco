import React from "react";
import { useState } from "react";
import { notifications } from "../data/Data";
import Modal from "../modal/Modal";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState({});

  const onClick = (item) => {
    setIsOpen(!isOpen);
    setClicked(item);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mt-8 mb-8 md:mb-16 space-x-8">
        Notifications
      </h2>
      <div>
        <div className="relative w-full h-auto py-2 px-2.5 md:px-8 pt-8 pb-16 rounded-xl bg-[#EFF6F2] space-y-4">
          {notifications.map((item, i) => {
            return (
              <div key={i} className="">
                <div className="flex justify-between items-center bg-white rounded-2xl py-4 px-4 sm:px-8">
                  <h2 className="font-medium text-xs sm:text-sm xl:text-base">
                    Rejected{" "}
                  </h2>
                  <h2 className="font-medium text-xs sm:text-sm xl:text-base">
                    Disposal
                  </h2>
                  <p className="font-normal text-xs sm:text-sm xl:text-base">
                    from
                  </p>
                  <div>
                    <img
                      className="cursor-pointer bg-acend-theme-dark w-8 h-8 sm:w-11 sm:h-11 rounded-full"
                      src="https://images.unsplash.com/photo-1662848586769-314289d4c8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                      alt="avatar"
                    />
                  </div>
                  <p className="font-normal text-xs sm:text-sm xl:text-base">
                    White Lion
                  </p>
                  <div>
                    <button onClick={() => onClick(item)}>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="cursor-pointer w-3.5 h-3.5 text-acend-100 sm:w-6 sm:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {clicked.id === item.id && isOpen ? (
                  <Modal item={item} onClick={onClick} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
