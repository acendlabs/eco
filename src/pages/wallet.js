import Footer from "../components/footer";
import Header from "../components/header";
import './wallet.css'
import walletconnect from '../images/walletconnect.png'
import metamusk from '../images/metamask.png'
import trust from '../images/trust.png'
import coinbase from '../images/coinbase.png'

function Wallet() {
    return(
        <>
            <div className="connect">
                 <h2>Connect Wallet</h2>
                <p>To use AcendEco you need to be connected to a wallet supported by the polygon chain.</p> 
                <div className="wallets">
                    <a href="#">
                        <div className="wallet">
                           <p>Metamask</p> 
                           <img src={metamusk} alt="" />
                        </div>
                        
                    </a>
                    <a href="#">
                        <div className="wallet">
                            <p>Wallet Connect</p>
                            <img src={walletconnect} alt="" />
                        </div>
                        
                    </a>
                    <a href=''>
                        <div className="wallet">
                            <p>Coinbase</p>
                            <img src={coinbase} alt="" />
                        </div>
                        
                    </a>
                    <a href="#">
                        <div className="wallet">
                           <p>Trust</p>
                           <img src={trust} alt="" /> 
                        </div>
                        
                    </a>
                </div>
            </div>
          
            
        </>
        
    );
};
export default Wallet;