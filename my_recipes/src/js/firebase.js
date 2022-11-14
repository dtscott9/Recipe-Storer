// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIEZKo5Iv74RAoGwmaJBzuTBuNLt3mGXw",
  authDomain: "my-recipe-storer.firebaseapp.com",
  projectId: "my-recipe-storer",
  storageBucket: "my-recipe-storer.appspot.com",
  messagingSenderId: "980882609878",
  appId: "1:980882609878:web:197715629cd918aaff9b77",
  measurementId: "G-KDPPK2CQ60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
console.log(auth);

export {app, db};

const provider = new GoogleAuthProvider();

export function signInWGoogle() {
    
    signInWithPopup(auth, provider).then((results) => {
        console.log(results)
        const name = results.user.displayName;
        const email = results.user.email;
        localStorage.setItem("userName", name);
        localStorage.setItem("email", email);
        if(localStorage.getItem("userName") != null) {
            document.querySelector(".links").style.display = "initial";
            document.querySelector(".google").style.display = "none";
            document.getElementById("user").textContent =  `Welcome ${localStorage.getItem("userName")}!`;
            document.querySelector("#ham").style.display = "initial";
            document.querySelector(".signOut").style.display = "initial";
        }
        else {
            document.querySelector(".links").style.display = "none";
            document.querySelector(".google").style.display = "initial";
            document.querySelector(".signOut").style.display = "none";
        }
      
    }).catch((error) => {
        console.log(error);
    })
    ;
}


export function isLoggedIn() {
    if (auth.currentUser == null) {
       
        
        signInWGoogle();
    }
}

export function signOutFromGoogle() {
    signOut(auth);
    localStorage.clear();
    document.querySelector(".links").style.display = "none !important";
    document.querySelector(".google").style.display = "initial";
    document.querySelector(".signOut").style.display = "none";
    document.querySelector("#user").style.display = "none";
    
}