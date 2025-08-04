// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAHCYxUClxGazeEdwYeLPCM4bGDhjFCnCY",
authDomain: "koulu-info-tv.firebaseapp.com",
projectId: "koulu-info-tv",
storageBucket: "koulu-info-tv.firebasestorage.app",
messagingSenderId: "1002414133585",
appId: "1:1002414133585:web:d4fabcf158c2bf60544370",
measurementId: "G-PNEQEXEC7C"
  };


  // Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
