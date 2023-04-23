import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function Contact() {
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
      <div className='grid grid-cols-2 gap-4 ml-64 mt-24'>
        <div className='pt-32'>
        <Link to="/" onClick={()=> navigate("/Home")}>
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className='pt-40'>
          <h2 className='text-4xl font-bold font-mono'>Contact Us</h2>
          <p className='pt-12 font-medium font-serif text-xl'>Darshan Rajodiya</p>
          <p className='font-medium font-serif text-xl'>E-mail : drajodiya286@rku.ac.in</p>
          <p className='pt-4 font-medium font-serif text-xl'>Nirav Parmar</p>
          <p className='font-medium font-serif text-xl'>E-mail : nparmar524@rku.ac.in</p>
          <p className='pt-4 font-medium font-serif text-xl'>Yash Savaliya</p>
          <p className='font-medium font-serif text-xl'>E-mail : ysavaliya215@rku.ac.in</p>
          <p className='pt-4 font-medium font-serif text-xl'>Shukan Memakiya</p>
          <p className='font-medium font-serif text-xl'>E-mail : smemakiya372@rku.ac.in</p>
        </div>
      </div>
  </div>
  );
}

export default Contact;