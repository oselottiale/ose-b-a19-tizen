import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHCYxUClxGazeEdwYeLPCM4bGDhjFCnCY",
  authDomain: "koulu-info-tv.firebaseapp.com",
  projectId: "koulu-info-tv",
  appId: "1:1002414133585:web:d4fabcf158c2bf60544370",
  measurementId: "G-PNEQEXEC7C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.firebaseApp = app;
window.firebaseAuth = auth;

window.dispatchEvent(new Event("firebase-ready"));
