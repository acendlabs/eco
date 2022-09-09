/* eslint-disable jsx-a11y/anchor-is-valid */
import profile from "../images/Vectorprofile.png";
import wallet from "../images/Vectorwallet.png";
import acendlogo from "../images/acendlogo.png";
import "./header.css";
const Header = () => {
  return (
    <header className="App-header">
      <navbar>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <li>
          <a href="/" className="acendlogo">
            <img src={acendlogo} alt="acendlogo" />
            <p>AcendEco</p>
          </a>
        </li>
        <ul>
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
              <img src={profile} alt="" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/wallet">
              <img src={wallet} alt="" />
              Wallet
            </a>
          </li>
        </ul>
      </navbar>
    </header>
  );
};
export default Header;
