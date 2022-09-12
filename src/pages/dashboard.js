/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./dashboard.css";
import addimage from "../images/addimage.png";
import avatar from "../images/pictureavatar.png";
import logolight from "../images/logolight.png";
import arrow from "../images/arrowdown.png";
import Modal from "../components/modal/Modal";
import Alert from "../components/Alert";
import Table from "../components/Table";

const Dashboard = () => {
  const [file, setFile] = useState({ data: null });
  const [filename, setFilename] = useState("Choose Image");
  const [user, setUser] = useState({ username: "" });
  const [alert, setAlert] = useState({});

  console.log(alert, user.username, file);
  const onFileChange = (e) => {
    setFile({ data: URL.createObjectURL(e.target.files[0]) });
    setFilename(e.target.files[0].name);
  };

  const onChange = (e) => {
    setUser({ [e.target.name]: e.target.value });
  };

  const remove = () => {
    setFile({ data: null });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.username === "" || user.username === null) {
      setAlert({ type: "danger", msg: "Enter all fields" });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } else {
      setAlert({ type: "success", msg: "Success" });
      setUser({});
      setTimeout(() => {
        setAlert({ username: "" });
      }, 1500);
    }
  };

  return (
    <div className="relative flex flex-col mx-[5%] sm:mx-[10%] md:mx-36">
      <Alert alert={alert} />
      <img
        className="w-[40%] h-auto absolute -z-10 left-[50%] -translate-x-2/4 opacity-25"
        src={logolight}
        alt=""
      />
      <h2 className="text-4xl font-black mt-8 mb-1">Dashboard</h2>
      <div className="flex flex-col justify-center md:flex-row md:justify-between h-[550px] md:h-[400px] items-center space-y-8 md:space-y-0 md:space-x-14">
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
        <form
          onSubmit={onSubmit}
          className="w-full md:w-7/12 lg:w-[70%] space-y-8 text-lg font-medium text-[#0F2F1D] "
        >
          <div className=" md:w-[32vw] lg:w-[34vw] space-y-3 ">
            <label
              className={alert.type === "danger" ? "text-red-400" : null}
              htmlFor="username"
            >
              {alert.type === "danger" ? alert.msg : "Username"}
            </label>
            <input
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
          <button
            type="submit"
            className="bg-[#0F2F1D] text-white py-4 px-6 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8 mb-16 text-left">
        <div className="relative w-full md:w-[60%] ">
          <h2 className="text-2xl font-bold mt-8 mb-8 md:mb-16 ">Requests</h2>
          <div className="overflow-x-scroll">
            <Table user={user} />
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <h2 className="text-2xl font-bold mt-8 mb-8 md:mb-16 space-x-8">
            Notifications
          </h2>
          <div className="w-full h-auto p-16 rounded-xl bg-[#EFF6F2]">
            <h1>available requests</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
