// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbZXSgm1b6_Eh6_AoGvZRFGWUKPPz1F3U",
    authDomain: "ecommerce-context-11a68.firebaseapp.com",
    projectId: "ecommerce-context-11a68",
    storageBucket: "ecommerce-context-11a68.appspot.com",
    messagingSenderId: "176790609502",
    appId: "1:176790609502:web:4018c56de2d2abf7d95ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);