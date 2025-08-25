import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-remote-config.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHCYxUClxGazeEdwYeLPCM4bGDhjFCnCY",
  authDomain: "koulu-info-tv.firebaseapp.com",
  projectId: "koulu-info-tv",
  storageBucket: "koulu-info-tv.firebasestorage.app",
  messagingSenderId: "1002414133585",
  appId: "1:1002414133585:web:d4fabcf158c2bf60544370",
  measurementId: "G-PNEQEXEC7C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
getAnalytics(app);

const remoteConfig = getRemoteConfig(app);
remoteConfig.settings = {
  minimumFetchIntervalMillis: 60_000  
};
remoteConfig.defaultConfig = {
  refresh_version: "v1"
};

export { remoteConfig, fetchAndActivate, getValue };

