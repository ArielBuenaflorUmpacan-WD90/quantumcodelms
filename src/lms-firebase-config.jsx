// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYteO1JzJ3diWJNfjNkuUHzJRE3xVUZFc",
  authDomain: "lms-database-react-app.firebaseapp.com",
  projectId: "lms-database-react-app",
  storageBucket: "lms-database-react-app.appspot.com",
  messagingSenderId: "750461240457",
  appId: "1:750461240457:web:6799dca1ea59eb5aec7258",
  measurementId: "G-PDCG3J408H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);