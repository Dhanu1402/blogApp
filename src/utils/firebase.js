// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blogapp-c247e.firebaseapp.com',
  projectId: 'blogapp-c247e',
  storageBucket: 'blogapp-c247e.appspot.com',
  messagingSenderId: '391663764725',
  appId: '1:391663764725:web:515b39bfc0c020a91df1bc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
