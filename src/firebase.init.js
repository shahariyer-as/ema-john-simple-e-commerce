import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQjXIAWY_1ToBc_XVF68fqTYMK0J836bw",
  authDomain: "ema-john-simple-a7ce2.firebaseapp.com",
  projectId: "ema-john-simple-a7ce2",
  storageBucket: "ema-john-simple-a7ce2.appspot.com",
  messagingSenderId: "970800767249",
  appId: "1:970800767249:web:d173faa9557cfaeaa8ecb0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
