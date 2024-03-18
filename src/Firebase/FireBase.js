// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5fPs2VPi5WVgrTbIZjCIA3oLSsneS89A",
  authDomain: "matafome-b8574.firebaseapp.com",
  projectId: "matafome-b8574",
  storageBucket: "matafome-b8574.appspot.com",
  messagingSenderId: "653457524795",
  appId: "1:653457524795:web:ebf72ea192f14ec882341e",
  measurementId: "G-966PGF8MM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;