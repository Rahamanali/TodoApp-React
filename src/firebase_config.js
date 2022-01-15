import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUHyXOvwctjPQr6_RZ16oeWyLBAXFUWZo",
  authDomain: "todos-d8230.firebaseapp.com",
  projectId: "todos-d8230",
  storageBucket: "todos-d8230.appspot.com",
  messagingSenderId: "940102792487",
  appId: "1:940102792487:web:b26b7d822ba3b66ba36502"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
