import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
// import Wallet from './pages/wallet';
import Header from "./components/layout/header";
// import Dispose from './pages/dispose';
import Dashboard from "./pages/dashboard";
// import Collect from './pages/collect';
import Error from "./pages/error";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element= {<Home/>} />
        <Route path='wallet' element ={<Wallet/>} />
        
        <Route path='dispose' element = {<Dispose/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path='*' element = { <Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='collect' element={<Collect />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
