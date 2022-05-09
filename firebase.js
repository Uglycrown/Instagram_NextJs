// Import the functions you need from the SDKs you need
import { initializeApp, getApps , getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl4fAh89ssXC17CwGeZw8QE-OKgjUQ1fw",
  authDomain: "insta-2-yt-36ebd.firebaseapp.com",
  projectId: "insta-2-yt-36ebd",
  storageBucket: "insta-2-yt-36ebd.appspot.com",
  messagingSenderId: "235202392788",
  appId: "1:235202392788:web:c4a041021bb6fafaab8141",
  measurementId: "G-J9CXMJJQ4S"
};

// Initialize Firebase

const app =!getApps().length ?initializeApp(firebaseConfig) : getApp();
const db=getFirestore();
const storage = getStorage();

export {app, db, storage};