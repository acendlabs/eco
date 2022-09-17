/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Wallet.css";
import meta_mask from "../images/meta_mask.svg";
import wallet_connect from "../images/wallet_connect.svg";
import coin_base from "../images/coin_base.svg";
import trust_wallet from "../images/trust_wallet.svg";

function Wallet() {
  return (
    <div className="container py-16 flex flex-col place-items-center space-y-4">
      <h2 className="font-semibold text-lg">Connect Wallet</h2>
      <p className="font-medium text-center text-sm sm:text-base">
        To use AcendEco you need to be connected to a wallet supported by the
        polygon chain
      </p>
      <div className="rounded-lg bg-acend-25 p-8 space-y-2 w-full sm:w-[60%]">
        <div className="flex items-center bg-white py-4 px-8 space-x-4 font-medium cursor-pointer rounded text-sm">
          <span>Metamask</span>
          <img className="w-8 h-8" src={meta_mask} alt="meta_mask_icon" />
        </div>
        <div className="flex items-center bg-white py-4 px-8 space-x-4 font-medium cursor-pointer rounded text-sm">
          <span>Wallet Connect</span>
          <img
            className="w-8 h-8"
            src={wallet_connect}
            alt="wallet_connect_icon"
          />
        </div>
        <div className="flex items-center bg-white py-4 px-8 space-x-4 font-medium cursor-pointer rounded text-sm">
          <span>Coinbase</span>
          <img className="w-8 h-8" src={coin_base} alt="coin_base_icon" />
        </div>
        <div className="flex items-center bg-white py-4 px-8 space-x-4 font-medium cursor-pointer rounded text-sm">
          <span>Trust Wallet</span>
          <img className="w-8 h-8" src={trust_wallet} alt="trust_wallet_icon" />
        </div>
      </div>
    </div>
  );
}
export default Wallet;
