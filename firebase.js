// firebase.js
// 1) Bring in the core SDKs + Remote Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-remote-config.js";

// 2) Your Firebase config (copy/paste from console)
const firebaseConfig = {
  apiKey: "AIzaSyAHCYxUClxGazeEdwYeLPCM4bGDhjFCnCY",
  authDomain: "koulu-info-tv.firebaseapp.com",
  projectId: "koulu-info-tv",
  storageBucket: "koulu-info-tv.firebasestorage.app",
  messagingSenderId: "1002414133585",
  appId: "1:1002414133585:web:d4fabcf158c2bf60544370",
  measurementId: "G-PNEQEXEC7C"
};

// 3) Init Firebase + Analytics
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// 4) Init Remote Config with defaults + settings
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings = {
  minimumFetchIntervalMillis: 60_000  // poll every 60 seconds
};
remoteConfig.defaultConfig = {
  // use a version string so you can bump instead of flipping booleans
  refresh_version: "v1"
};

// 5) Export only what the page needs
export { remoteConfig, fetchAndActivate, getValue };

