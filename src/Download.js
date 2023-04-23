import logo from './logo.svg';
import './App.css';
import './Download.css'
import { useNavigate } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';

function Download() {
    
    const navigate = useNavigate();
    const storage = getStorage();
    function downloadlink(e){
      e.preventDefault();
      const downlink = e.target.downlink.value;
      const link = document.createElement('a');
      link.href = downlink;
      link.target = '_blank';
      link.download = 'file';
      link.click();
    }
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
      <div className='grid grid-cols-2 gap-4 ml-44 mt-24'>
        <div className='pt-36'>
        <Link to="/" onClick={()=> navigate("/Home")}>
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className='DownloadContentbox'>
          <h2 className='text-4xl text-center text-white'>Download File</h2>
          <form onSubmit={downloadlink}>
          <div className='mt-12'>
          <input type='text' id='downlink' name='downlink' className='w-full font-serif rounded text-center h-10 text-lg' placeholder='Enter download link'></input>
          </div>
          {/* <button onClick={getDownloadURL} className='bg-sky-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded ml-36 mt-8 text-lg'>Download</button> */}
          <input type='submit' className='bg-sky-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded ml-36 mt-8 text-lg' value='Download'></input>

          </form>
        </div>
      </div>
  </div>
  );
}

export default Download;