/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./dashboard.css";
import addimage from "../images/addimage.png";
import avatar from "../images/pictureavatar.png";
import logolight from "../images/logolight.png";
import arrow from "../images/arrowdown.png";
import Modal from "../components/modal/Modal";
import Alert from "../components/Alert";
import { type } from "@testing-library/user-event/dist/type";

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
    <div className="flex flex-col mx-8 md:mx-28">
      <Alert alert={alert} />
      {/* <img className="w-44 h-44 " src={logolight} alt="" /> */}
      {/* <h2>Dashboard</h2> */}
      <div className="flex flex-col justify-center md:flex-row md:justify-between h-[550px] md:h-[400px] items-center space-y-8 md:space-y-0 md:space-x-14">
        <div className="relative w-auto space-y-8">
          <img
            className={`rounded-full ${
              !file?.data ? `p-8` : `w-[135px] h-[135px]`
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
            className="absolute top-0 right-0 cursor-pointer"
            htmlFor="file"
          >
            <img className="w-6 h-6" src={addimage} alt="" />
          </label>
          <button className="font-bold text-lg text-[#2C8C57]" onClick={remove}>
            Remove avatar
          </button>
        </div>
        <form
          onSubmit={onSubmit}
          className="md:w-7/12 lg:w-9/12 flex-col space-y-8 text-lg font-medium text-[#0F2F1D]"
        >
          <div className="w-[400px] md:w-[32vw] space-y-3 ">
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
        {/* <button>Become a Recycler</button> */}
      </div>
      {/* <button id="remove">Remove Avatar</button>
          <div className="group2">
            <div className="left">
              <h2>Requests</h2>
              <div className="card1">
                <div className="links">
                  <a href="">Disposal</a>
                  <a href="">Collection</a>
                  <a href="">Recycle</a>
                </div>
                <div className="header">
                  <p>User</p>
                  <p>Weight</p>
                  <p>Distance</p>
                </div>
                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>

                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>
                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>
                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>
                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>
                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>
                <div className="items">
                  <img src={avatar} alt="" />
                  <p>white lion</p>
                  <p>2kg</p>
                  <p>10mins away</p>
                  <button className="accept">Accept</button>
                  <button className="decline">Decline</button>
                </div>
              </div>
            </div>
            <div className="right">
              <h2>Notifications</h2>
              <div className="card2">
                <div className="itemgroup">
                  <h3>Rejected Disposal</h3>
                  <p>From</p>
                  <img src={avatar} alt="" />
                  <p>White lion</p>
                  <a className="icon">
                    {" "}
                    <img src={arrow} alt="arrow" />{" "}
                  </a>
                </div>
                <div className="itemgroup">
                  <h3>Accepted Recycle</h3>
                  <p>From</p>
                  <img src={avatar} alt="" />
                  <p>White lion</p>
                  <a className="icon">
                    {" "}
                    <img src={arrow} alt="arrow" />{" "}
                  </a>
                </div>
                <div className="itemgroup">
                  <h3>Accepted Collection</h3>
                  <p>From</p>
                  <img src={avatar} alt="" />
                  <p>White lion</p>
                  <a className="icon">
                    {" "}
                    <img src={arrow} alt="arrow" />{" "}
                  </a>
                </div>
                <div className="itemgroup">
                  <h3>Accepted Disposal</h3>
                  <p>From</p>
                  <img src={avatar} alt="" />
                  <p>White lion</p>
                  <a className="icon">
                    {" "}
                    <img src={arrow} alt="arrow" />{" "}
                  </a>
                </div>
                <div className="itemgroup">
                  <h3>Rejected Collection</h3>
                  <p>From</p>
                  <img src={avatar} alt="" />
                  <p>White lion</p>
                  <a className="icon">
                    {" "}
                    <img src={arrow} alt="arrow" />{" "}
                  </a>
                </div>
                <div className="itemgroup">
                  <h3>Rejected Recycle</h3>
                  <p>From</p>
                  <img src={avatar} alt="" />
                  <p>White lion</p>
                  <a className="icon">
                    {" "}
                    <img src={arrow} alt="arrow" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default Dashboard;
