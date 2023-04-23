// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-nFwhZluyYobfYMT27_10YMA_lPYqIr0",
  authDomain: "a2zshare-959b5.firebaseapp.com",
  projectId: "a2zshare-959b5",
  storageBucket: "a2zshare-959b5.appspot.com",
  messagingSenderId: "544498937844",
  appId: "1:544498937844:web:b6b318eab2eefe27d553a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;