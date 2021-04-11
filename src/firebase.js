import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcybVFURM7qUtRLvTkVINHYuh_6Ljf620",
    authDomain: "clone-1d4e7.firebaseapp.com",
    projectId: "clone-1d4e7",
    storageBucket: "clone-1d4e7.appspot.com",
    messagingSenderId: "22172334684",
    appId: "1:22172334684:web:364472e75c76888405c499"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};