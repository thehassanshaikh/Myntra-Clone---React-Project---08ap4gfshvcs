// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7bDkrOH-6lcxGpdZa0-EdZ0daMwujF04",
    authDomain: "myntra-auth-a3ac8.firebaseapp.com",
    projectId: "myntra-auth-a3ac8",
    storageBucket: "myntra-auth-a3ac8.appspot.com",
    messagingSenderId: "492014957236",
    appId: "1:492014957236:web:67a22a84a1d76f8b52dde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);