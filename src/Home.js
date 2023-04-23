import logo from './logo.svg';
import './App.css';
import 'animate.css';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
    
    <div className='h-screen w-screen'>
      <div className='w-full bg-blue-100 p-1'>
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
      <div className='grid grid-cols-2 gap-0 ml-52 mt-16'>
        <div className='mt-28'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='mt-44'>
          <h1 className="text-9xl text-sky-500 font-semibold animate-pulse font-mono">a2z Share</h1>
          <h3 className="text-4xl pl-4 text-sky-700 font-light font-serif">A file sharer made for everyone...</h3>
          <div className='ml-12 mt-6'>
            <Link to="/Donate" onClick={()=> navigate("/Donate")}>
              <button className="text-decoration-line: underline text-xl hover:text-sky-400 font-sans">Interested in assisting? Donate Now</button>
              </Link>
            </div>
        </div>
        <div className='col-span-2 ml-96 flex space-x-4 mt-24'>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg p-4">
          <Link to="/Send" onClick={()=> navigate("/Send")}><p className="text-5xl">Send</p></Link>
          </div>
          <div className="pl-12"></div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg p-4">
          <Link to="/Download" onClick={()=> navigate("/Download")}><p className="text-5xl">Download</p></Link>
          </div>
            
        </div>
      </div>
  </div>
  );
}

export default Home;
