// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoEXjQEK6BQpUZgOoeHVZchaVi1mZ7vNo",
  authDomain: "get-gears.firebaseapp.com",
  projectId: "get-gears",
  storageBucket: "get-gears.appspot.com",
  messagingSenderId: "1058221014421",
  appId: "1:1058221014421:web:5788d8eaf8b0ac7dd30a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth