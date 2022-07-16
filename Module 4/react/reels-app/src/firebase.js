// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" // Import krna hoga to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMVMWvzFWYMwW0OLhc5hkVQc-cdr1vats",
  authDomain: "class-demo-fb102.firebaseapp.com",
  projectId: "class-demo-fb102",
  storageBucket: "class-demo-fb102.appspot.com",
  messagingSenderId: "666091823385",
  appId: "1:666091823385:web:93f6681a7fbb430d35a588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);// Export krna hoga