/* eslint-disable jsx-a11y/anchor-is-valid */
// import profile from "../images/Vectorprofile.png";
// import wallet from "../images/Vectorwallet.png";
// import acendlogo from "../images/acendlogo.png";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
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
    <header className="flex flex-col text-white bg-acend-theme-dark">
      <div
        ref={modalRef}
        onClick={onClk}
        className={`${
          isOpen ? null : `hidden`
        } transition-opacity duration-300  absolute z-10 bg-black opacity-60 h-full w-full ease-in`}
      ></div>

      <ul
        className={`${
          isOpen ? null : `hidden`
        } absolute z-10 top-0 pl-4 p-4 py-8 text-sm w-[70%] bg-acend-theme-dark flex flex-col sm:hidden justify-between space-y-8`}
      >
        <li className="p-4 border-slate-100">
          <div className="flex justify-between items-center">
            <Link className="cursor-pointer" to="/dispose">
              LOGO
            </Link>
            <svg
              onClick={openMenu}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cursor-pointer w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </li>
        <li className=" pb-2 pl-4 border-slate-100">
          <Link to="/dispose">Dispose</Link>
        </li>
        <li className=" pb-2 pl-4 border-slate-100">
          <Link to="/collect">Collect</Link>
        </li>
        <li className="pb-2 pl-4 border-slate-100">
          <Link to="#">Recycle</Link>
        </li>
        <li className=" pb-2 pl-4 border-slate-100">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className=" pb-2 pl-4 border-slate-100">
          <Link to="/wallet">Wallet</Link>
        </li>
      </ul>
      <nav className="flex justify-between h-[100px] items-center container">
        <ul className="hidden lg:flex justify-between space-x-8">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <Link to="/" className="acendlogo">
          {/* <img src={acendlogo} alt="acendlogo" /> */}
          <p>AcendEco</p>
        </Link>
        <div className="flex sm:hidden cursor-pointer" onClick={openMenu}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul className="hidden sm:flex justify-between space-x-8">
          <li>
            <a href="/dispose">Dispose</a>
          </li>
          <li>
            <a href="/collect">Collect</a>
          </li>
          <li>
            <a href="#">Recycle</a>
          </li>
          <li>
            <a href="/dashboard">
              {/* <img src={profile} alt="" /> */}
              Dashboard
            </a>
          </li>
          <li>
            <a href="/wallet">
              {/* <img src={wallet} alt="" /> */}
              Wallet
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
