import React from "react";
import "./dispose.css";
import logolight from "../images/logolight.png";
import SearchForm from "../components/Forms/SearchForm";
import Title from "../components/layout/Title";

function Dispose() {
  return (
    <div className="relative flex flex-col container py-8">
      {/* <Alert alert={alert} /> */}
      <img
        className="w-[40%] h-auto absolute -z-10 left-[50%] -translate-x-2/4 opacity-25"
        src={logolight}
        alt=""
      />
      <Title title="Dispose" />
      <div className="flex flex-col justify-center md:flex-row md:justify-between py-16 items-center space-y-8 md:space-y-0 md:space-x-14">
        <SearchForm />
      </div>

      {/* <div className="flex flex-col xl:flex-row xl:space-x-8 mb-16 text-left">
        <div className="relative w-full xl:w-[60%] ">
          <h2 className="text-2xl font-bold mt-8 mb-8 md:mb-16 ">Activities</h2>
          <div className="w-full overflow-x-scroll sm:overflow-hidden">
            <Table user={user} />
          </div>
          <Pagination />
        </div>
        <div className="w-full xl:w-[40%]">
          <Notifications />
        </div>
      </div> */}
    </div>
  );
}
export default Dispose;
