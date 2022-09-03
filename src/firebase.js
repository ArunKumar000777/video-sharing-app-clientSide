// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsM9Ai9a1P-AA3RNhnhAY_5e9YGx8vSdo",
  authDomain: "video-a5d8e.firebaseapp.com",
  projectId: "video-a5d8e",
  storageBucket: "video-a5d8e.appspot.com",
  messagingSenderId: "511851060560",
  appId: "1:511851060560:web:3b3c9177d1ead816ad6055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider =new GoogleAuthProvider()

export default app