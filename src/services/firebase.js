// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7zqzBrqugdBlkUwmlVyLdjfcgS8jTSjQ",
    authDomain: "gidschat.firebaseapp.com",
    databaseURL: "https://gidschat.firebaseio.com",
    projectId: "gidschat",
    storageBucket: "gidschat.appspot.com",
    messagingSenderId: "814431407256",
    appId: "1:814431407256:web:0f4c46f4281600a922d4ed",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;