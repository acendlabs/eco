import acendlogo from '../images/acendlogo.png'
import'./footer.css'
import {Link} from 'react-router-dom'
const Footer = () =>{
    return (
        <footer>
          <div className="group">
            <a href="/" className='logogroup'>
              <img src={acendlogo} alt="" />
              <h2>AcendEco</h2>
            </a>
          </div>
          <div className="group">
            <a href="#about">About</a>
            <a href="#">FAQ</a>
          </div>
          <div className="group">
            <a href="/wallet">Wallet</a>
            <a href="#">Dashboard</a>
          </div>
          <div className="group">
            <a href="/collect">Collect</a>
            <a href="#">Dispose</a>
            <a href="#">Recycle</a>
          </div>
        </footer>
    )
};
export default Footer