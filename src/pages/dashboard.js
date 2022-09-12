/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./dashboard.css";
import addimage from "../images/addimage.png";
import avatar from "../images/pictureavatar.png";
import logolight from "../images/logolight.png";
import arrow from "../images/arrowdown.png";
import Modal from "../components/modal/Modal";

const Dashboard = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose Image");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <div className="flex flex-col mx-28">
      {/* <img className="w-44 h-44 " src={logolight} alt="" /> */}
      {/* <h2>Dashboard</h2> */}
      <div className="flex flex-col justify-center md:flex-row md:justify-between h-[380px] md:h-64 items-center space-y-8 md:space-y-0">
        <div className="relative w-auto bg-gray-600 overflow-visible">
          <img
            className="rounded-full p-8 border-[5px] border-[#0F2F1D]"
            src={file ? avatar : file}
            alt=""
          />

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            accept="image/*"
            onChange={onChange}
          />
          <label
            className="absolute top-0 right-0 cursor-pointer"
            htmlFor="file"
          >
            <img className="w-6 h-6" src={addimage} alt="" />
          </label>
        </div>
        <form className="md:w-9/12 flex-col bg-slate-500">
          <div className="w-full  md:w-[32vw] space-y-3 text-[#0F2F1D]">
            <label className="text-lg font-medium" for="username">
              Username
            </label>
            <input
              className="w-full rounded-lg border-[3px] border-[#0F2F1D] bg-transparent py-3.5 px-8 text-base outline-none"
              type="text"
              name="username"
              placeholder="Enter a display name"
            />
          </div>
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
