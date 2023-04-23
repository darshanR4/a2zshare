import logo from './logo.svg';
import './App.css';
import './Send.css';
import storage from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useState} from "react";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function Send() {
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [downurl, setDownurl] = useState(null);
    function handleChange(event) {
      setFile(event.target.files[0]);
      }

      const handleUpload = () => {
       if (!file) {
       alert("Please upload an image first!");
       }
    
        const storageRef = ref(storage, `/files/${file.name}`);
        // progress can be paused and resumed. It also exposes progress updates.
       // Receives the storage reference and the file to upload.
       const uploadTask = uploadBytesResumable(storageRef, file);
       uploadTask.on(
       "state_changed",
       (snapshot) => {
       const percent = Math.round(
       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
       );
      // update progress
      setPercent(percent);
      },
      (err) => console.log(err),
      () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
      console.log(url);
      setDownurl(url)
      });
      }
      );
      };
      function sendEmail(e) {
        e.preventDefault();
      
        // Get the values of the form fields
        const sender_name = e.target.sender_name.value;
        const reciever_mail = e.target.reciever_mail.value;
        const mail = e.target.mail.value;
        const downlink = downurl;
      
        // Create an object containing the values for the template variables
        const templateParams = {
          sender_name: sender_name,
          reciever_mail: reciever_mail,
          mail: mail,
          downlink: downlink
        };
      
        // Send the email using the specified service and template
        emailjs.send('service_kxyw1qa', 'template_pmh7lyo', templateParams, '-qFixZjFXrjL0Ymia')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
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
      <div className='grid grid-cols-2 gap-4 ml-36 mt-8'>

        <div className='mt-44 ml-28'>
        <Link to="/" onClick={()=> navigate("/Home")}>
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>

        <div className='Contentbox align-middle'>
          <div>
          <p className='text-4xl text-white text-center'>Send File</p>
          </div>
            <form onSubmit={sendEmail}>
            <div className='text-xl mt-8'>
            <input type='text' placeholder='Sender Name' id='sender_name' name='sender_name' className='w-full h-10 border-solid border-2 font-serif border-black rounded'></input>
            </div>
            <div className='text-xl mt-3'>
            <input type='text' placeholder='Reciever E-mail' id='reciever_mail' name='reciever_mail' className='w-full h-10 border-solid font-serif border-2 border-black rounded'></input>
            </div>
            <div className='text-xl mt-3'>
            <textarea name="mail" id='mail' rows={10} cols={45} className='w-full border-solid font-serif border-2 border-black rounded' placeholder='Message' />
            </div>
            <div className='text-xl mt-2'>
            <p className='text-white'>Maximum file size is 10MB.</p>
            <input type='file' className='w-full h-10 border-solid font-serif border-2 border-black rounded' onChange={handleChange}></input>
            <div className='grid grid-cols-2 mt-3'>
            <button onClick={handleUpload} className='bg-white hover:bg-green-800 text-black hover:text-white font-bold rounded w-full p-2'>Upload</button>
            <p className='text-white pl-8 p-2 font-semibold'>{percent} % Done</p>
            </div>
            </div>
            <div className='mt-6 ml-10'>
            
            <input type='submit' value='Send' className='bg-white hover:bg-green-800 text-black hover:text-white font-bold py-4 px-8 p-4 text-2xl rounded'></input>
            
            </div>
            </form>
          <div className='ml-56 -mt-16'>
          <Link to="/Share" onClick={()=> navigate("/Share",{state:{id:downurl}})}>
          <button className='bg-blue-400 hover:bg-green-800 text-black hover:text-white font-bold py-4 px-8 text-2xl rounded ml-8'>Share</button>
          </Link>
          </div>

        </div>
      </div>
  </div>
  );
}

export default Send;