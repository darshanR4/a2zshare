import logo from './logo.svg';
import './App.css';
import './Share.css';
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import QRCode from 'qrcode';
import { useState } from 'react';

function Share() {
  const [qrCode, setQrCode] = useState('');
  const location= useLocation();

  const url= location.state?location?.state?.id :"Wait for URL";
 

  const generateQRcode = async () => {
    if(url != null)
    {
      try{
        const text = await url;
        const response = await QRCode.toDataURL(text);
        setQrCode(response);
    }
    catch (error){
        console.log(error);
    }
  }
  else{
    console.log("hellooo")
  }
    }
    
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen'>
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
      <div className='grid grid-cols-2 gap-4 pl-36'>
        <div className='pt-52 pl-16'>
        <Link to="/" onClick={()=> navigate("/Home")}>
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className='ShareContentbox'>
          <h2 className='text-4xl text-center font-serif text-black'>Share</h2>
          <div className='h-96 w-full'>
          {/* <img src='./dummy-QR-reactdev.jpg' className='mt-4' alt="QR code" /> */}
          {qrCode && <img src={qrCode} className='h-80 w-80 ml-12' alt="QRcode" /> }
          
          <button type='button' onClick={generateQRcode} className='bg-blue-400 hover:bg-green-800 text-black hover:text-white rounded self-center p-2 w-full font-semibold text-xl'>Get QRCode</button>
          
          </div>
          <div className='ring-black ring-offset-4 hover:ring-offset-0 mt-8'>
          <input type="text" className='rounded-md text-xl border-2 border-black text-center w-full h-10' value={url} disabled></input>
          </div>
          <Link to="/Contact" onClick={()=> navigate("/Contact")}>
            <p className='text-center underline decoration-cyan-500 text-lg hover:decoration-black text-blue-500 pt-4'>Contact Us</p>
          </Link>
          <p className='pt-6 text-center font-sans'>Note: Directly copy the link in the downloads section or scan the QR Code to Download Your Files</p>
        </div>
      </div>
  </div>
  );
}

export default Share;