/* eslint-disable jsx-a11y/anchor-is-valid */
// import profile from "../images/Vectorprofile.png";
// import wallet from "../images/Vectorwallet.png";
import acendlogo from "../../images/acendlogo.png";
import "./header.css";

import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { disposerMenu } from "../data/Data";
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
    <header className="flex flex-col text-white bg-acend-theme-dark text-sm font-normal">
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
        } rounded-xl absolute z-10 top-0 pl-4 p-4 py-8 text-sm w-[70%] bg-acend-theme-dark flex flex-col sm:hidden justify-between space-y-8`}
      >
        <li className="p-4 border-slate-100">
          <div className="flex justify-between items-center">
            <Link className="cursor-pointer space-y-3" to="/dashboard">
              <img className="w-12" src={acendlogo} alt="acendlogo" />
              <p>AcendEco</p>
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
        {disposerMenu.map((item, i) => {
          return (
            <li
              onClick={openMenu}
              key={i}
              className="pb-2 pl-4 border-slate-100"
            >
              <NavLink to={`/${item.link}`}>{item.name}</NavLink>
            </li>
          );
        })}
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

        <Link to="/dashboard" className="flex items-end space-x-2">
          <img className="w-12" src={acendlogo} alt="acendlogo" />
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
          {disposerMenu.map((item, i) => {
            return (
              <li key={i}>
                <NavLink to={`/${item.link}`}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
