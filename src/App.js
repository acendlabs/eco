import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicProvider } from "wagmi/providers/public";
import { createClient, configureChains, chain, WagmiConfig } from "wagmi";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Dispose from "./pages/Dispose";
import Dashboard from "./pages/Dashboard";
import Collect from "./pages/Collect";
import Error from "./pages/Error";
import Recycle from "./pages/Recycle";
import Register from "./pages/Register";
import ConnectWallet from "./components/modal/ConnectWallet";
import Wallet from "./pages/Wallet";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const connect = (item) => {
    if (item?.link === "wallet") {
      // setOpenModal(!openModal);
    }
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const modalRef = useRef();

  const onClk = (e) => {
    if (modalRef.current === e.target) setIsOpen(false);
  };

  const { provider, webSocketProvider } = configureChains(
    [chain.polygon, chain.polygonMumbai],
    [publicProvider()]
  );

  const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
  });

  return (
    <WagmiConfig client={client}>
      <BrowserRouter>
        <div className={`${isOpen || openModal ? `overflow-hidden` : `overflow-visible`} h-screen`}>
          <div
            ref={modalRef}
            onClick={onClk}
            className={`${
              isOpen || openModal ? null : `hidden`
            } transition-opacity duration-300  absolute z-10 bg-black opacity-60 h-full w-full ease-in`}
          ></div>
          {openModal ? <ConnectWallet openModal={openModal} setOpenModal={setOpenModal} /> : null}
          <Header connect={connect} />

          <Routes>
            <Route path="wallet" element={<Wallet />} />

            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route index path="dispose" element={<Dispose isOpen={isOpen} openMenu={openMenu} />} />
            <Route path="collect" element={<Collect isOpen={isOpen} openMenu={openMenu} />} />
            <Route path="recycle" element={<Recycle isOpen={isOpen} openMenu={openMenu} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
