import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCnUCL0hdgPH8JsrgC6ug1BsISbEn91uC4",
  authDomain: "funny-chat-c8aa5.firebaseapp.com",
  projectId: "funny-chat-c8aa5",
  storageBucket: "funny-chat-c8aa5.appspot.com",
  messagingSenderId: "1015650339384",
  appId: "1:1015650339384:web:29969d2d7afd90d713b4cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
