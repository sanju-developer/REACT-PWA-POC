import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo3R487YLPMWBeG5NBp97IqWA52CnLQvw",
    authDomain: "react-pwa-poc-b548a.firebaseapp.com",
    databaseURL: "https://react-pwa-poc-b548a.firebaseio.com",
    projectId: "react-pwa-poc-b548a",
    storageBucket: "react-pwa-poc-b548a.appspot.com",
    messagingSenderId: "607918372009",
    appId: "1:607918372009:web:a27c7387452c31b1b525b8",
    measurementId: "G-SNWGSGDJH3"
};
firebase.initializeApp(firebaseConfig)
export default firebase