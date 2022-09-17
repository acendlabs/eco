import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Dispose from "./pages/Dispose";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import Collect from "./pages/Collect";
import Error from "./pages/Error";
import Recycle from "./pages/Recycle";
import Register from "./pages/Register";
=======
import Dashboard from "./pages/dashboard";
import Collect from "./pages/Collect";
import Error from "./pages/Error";
import Recycle from "./pages/Recycle";
<<<<<<< HEAD
import ChooseIdentity from "./pages/ChooseIdentity";
>>>>>>> 3ffa0d6 (wallet)
=======
import Register from "./pages/Register";
>>>>>>> ae12eaf (update register comp/page)
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

  return (
    <BrowserRouter>
      <div
        className={`${
          isOpen || openModal ? `overflow-hidden` : `overflow-visible`
        } h-screen`}
      >
        <div
          ref={modalRef}
          onClick={onClk}
          className={`${
            isOpen || openModal ? null : `hidden`
          } transition-opacity duration-300  absolute z-10 bg-black opacity-60 h-full w-full ease-in`}
        ></div>
        {openModal ? (
          <ConnectWallet openModal={openModal} setOpenModal={setOpenModal} />
        ) : null}
        <Header connect={connect} />

        <Routes>
          <Route path="wallet" element={<Wallet />} />

          <Route path="/" element={<Home />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="register" element={<Register />} />
=======
          <Route path="choose-identity" element={<ChooseIdentity />} />
>>>>>>> 3ffa0d6 (wallet)
=======
          <Route path="register" element={<Register />} />
>>>>>>> ae12eaf (update register comp/page)
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            index
            path="dispose"
            element={<Dispose isOpen={isOpen} openMenu={openMenu} />}
          />
          <Route
            path="collect"
            element={<Collect isOpen={isOpen} openMenu={openMenu} />}
          />
          <Route
            path="recycle"
            element={<Recycle isOpen={isOpen} openMenu={openMenu} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
