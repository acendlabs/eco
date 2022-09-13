import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home';
// import Wallet from './pages/wallet';
import Header from "./components/layout/header";
// import Dispose from './pages/dispose';
import Dashboard from "./pages/dashboard";
// import Collect from './pages/collect';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element= {<Home/>} />
        <Route path='wallet' element ={<Wallet/>} />
        <Route path='*' element = { <h2>oops nothing here</h2>} />
        <Route path='dispose' element = {<Dispose/>}/> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='collect' element={<Collect />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
