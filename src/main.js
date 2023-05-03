// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiAoIgxvdZnD0_w2CFKSL9KtQ2Uz3hUSg",
  authDomain: "test-social-network-769f1.firebaseapp.com",
  databaseURL: "https://test-social-network-769f1-default-rtdb.firebaseio.com",
  projectId: "test-social-network-769f1",
  storageBucket: "test-social-network-769f1.appspot.com",
  messagingSenderId: "602607912276",
  appId: "1:602607912276:web:6b44b262252104d386b4c1",
  measurementId: "G-Q1609MZRZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);