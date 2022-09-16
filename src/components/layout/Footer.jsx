/* eslint-disable jsx-a11y/anchor-is-valid */
import acendlogo from "../../images/acendlogo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="p-5 flex justify-between sm:justify-center sm:gap-10 md:gap-20 lg:py-10 lg:gap-32">
      <div className="group">
        <a href="/" className="logogroup">
          <img
            className="h-10 md:h-12 lg:h-16"
            src={acendlogo}
            alt="acendlogo"
          />
          <h2>AcendEco</h2>
        </a>
      </div>
      <div className="group ">
        <a href="#about">About</a>
        <a href="#">FAQ</a>
      </div>
      <div className="group">
        <Link to="/wallet">Wallet</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="group">
        <Link to="/collect">Collect</Link>
        <Link to="/dispose">Dispose</Link>
        <Link to="/recycle">Recycle</Link>
      </div>
    </footer>
  );
};
export default Footer;
