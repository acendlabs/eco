/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./dashboard.css";
import addimage from "../images/addimage.png";
import avatar from "../images/pictureavatar.png";
import logolight from "../images/logolight.png";
import arrow from "../images/arrowdown.png";

const Dashboard = () => {
  return (
    <div className="bggroupnp">
      <img className="bgimg" src={logolight} alt="" />
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="group1">
          <div className="left">
            <div className="ellipse">
              <img src={avatar} alt="" />
            </div>
            <a href="#" className="changeavatar">
              <img src={addimage} alt="" />
              <p>Change Avatar</p>
            </a>
          </div>
          <div className="right">
            <h3>User1</h3>
            <input
              type="text"
              name="display"
              id=""
              placeholder="Enter a display name"
            />
            <button>Become a Recycler</button>
          </div>
        </div>
        <button id="remove">Remove Avatar</button>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
