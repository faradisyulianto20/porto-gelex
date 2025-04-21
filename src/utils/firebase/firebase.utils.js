// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    // signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    ProviderId} 
from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhFbPjEVejFocItHyT82ajffZhgGOvHUw",
  authDomain: "faradis-da8f7.firebaseapp.com",
  projectId: "faradis-da8f7",
  storageBucket: "faradis-da8f7.firebasestorage.app",
  messagingSenderId: "194842093542",
  appId: "1:194842093542:web:ac940141a22ed7b9675827",
  measurementId: "G-EZLWEBFG1S"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);