import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function Donate() {
    const navigate = useNavigate();
  return (
    <div className='h-screen w-screen'>
      <div className='w-full bg-blue-200 p-1'>
      <Link to="/" onClick={()=> navigate("/Home")}>
          <button className='bg-blue-600 hover:bg-white text-white hover:text-black font-bold py-1 px-2 ml-12'>a2zShare</button>
      </Link>
      <Link to="/Send" onClick={()=> navigate("/Send")}>
          <button className='hover:bg-blue-400 text-black hover:text-white font-bold py-1 px-2 ml-12'>Send</button>
      </Link>
      <Link to="/Download" onClick={()=> navigate("/Download")}>
          <button className='hover:bg-blue-400 text-black hover:text-white font-bold py-1 px-2 ml-12'>Download</button>
      </Link>
      <Link to="/Contact" onClick={()=> navigate("/Contact")}>
          <button className='hover:bg-blue-400 text-black hover:text-white font-bold py-1 px-2 ml-12'>Contact Us</button>
      </Link>
      <Link to="/Donate" onClick={()=> navigate("/Donate")}>
          <button className='hover:bg-blue-400 text-black hover:text-white font-bold py-1 px-2 ml-12'>Support Us</button>
      </Link>
      </div>
      <div className='grid grid-cols-2 gap-4 ml-52 mt-20'>
        <div className='pt-36'>
        <Link to="/" onClick={()=> navigate("/Home")}>
          <img src={logo} className="App-logo mt-8" alt="logo" />
          </Link>
        </div>
        <div className='pt-28'>
          <h2 className='text-4xl font-bold font-mono ml-36'>Donate</h2>
          <img src='./Gpay_50.jpg' className='mt-6' alt="Payment QR code" />
          <p className='font-serif mt-4 text-xl -ml-20'>Note: If you are willing to Donate us then, please scan the QR code.</p>
        </div>
      </div>
  </div>
  );
}

export default Donate;