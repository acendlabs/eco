import React, { useEffect, useRef, useState } from "react";
import "./dispose.css";
import logolight from "../images/logolight.png";
import SearchForm from "../components/Forms/SearchForm";
import Title from "../components/layout/Title";
import Table from "../components/layout/Table";
import Pagination from "../components/layout/Pagination";
import JoinPool from "../components/layout/JoinPool";
import Weight from "../components/modal/Weight";

function Dispose() {
  const [pool, setPool] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const modalRef = useRef();

  const onClk = (e) => {
    if (modalRef.current === e.target) setIsOpen(false);
  };

  return (
    <div
      className={`${isOpen ? `overflow-hidden` : `overflow-visible`} h-screen`}
    >
      <div
        ref={modalRef}
        onClick={onClk}
        className={`${
          isOpen ? null : `hidden`
        } transition-opacity duration-300  absolute z-10 bg-black opacity-60 h-full w-full ease-in`}
      ></div>
      <div className="relative flex flex-col container py-8 overflow-y-scroll">
        {isOpen ? <Weight openMenu={openMenu} /> : null}
        <img
          className="w-[40%] h-auto absolute -z-10 left-[50%] -translate-x-2/4 opacity-25"
          src={logolight}
          alt=""
        />
        <Title title="Dispose" />
        {/* <div className="flex flex-col justify-center md:flex-row md:justify-between py-16 items-center space-y-8 md:space-y-0 md:space-x-14"></div> */}

        <div className="flex justify-center">
          <div className="relative w-full xl:w-[70%]">
            <div className="py-16">
              <SearchForm />
            </div>
            <div className="text-left">
              <JoinPool setPool={setPool} pool={pool} openMenu={openMenu} />
            </div>
            <div className="w-full overflow-x-scroll sm:overflow-hidden">
              <Table user={`user`} pool={pool} />
            </div>
            <Pagination />
          </div>
          {/* <div className="w-full xl:w-[40%]">
          <Notifications />
        </div> */}
        </div>
      </div>
    </div>
  );
}
export default Dispose;
