import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAy-GKsuKGvRh-dciPu3al8xkMMj7LZdbU",
    authDomain: "hackathon-2020-6f7c3.firebaseapp.com",
    databaseURL: "https://hackathon-2020-6f7c3.firebaseio.com",
    projectId: "hackathon-2020-6f7c3",
    storageBucket: "hackathon-2020-6f7c3.appspot.com",
    messagingSenderId: "478247344530",
    appId: "1:478247344530:web:f9ef1b0a099e63caa4094b"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()
