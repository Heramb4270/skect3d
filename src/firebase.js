// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQo9-LAI20zr1op6fi4IZKHcRJIHOrxQY",
  authDomain: "deo-project-201f2.firebaseapp.com",
  projectId: "deo-project-201f2",
  storageBucket: "deo-project-201f2.appspot.com",
  messagingSenderId: "272543269351",
  appId: "1:272543269351:web:667924dc04ad12fbf3fd42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
