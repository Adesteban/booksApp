// Import the functions you need from the SDKs you need
import * as firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq0ai8au_WId7RpZTbEdpy7XGI2H1pTZI",
  authDomain: "mobile-book-app-64b21.firebaseapp.com",
  projectId: "mobile-book-app-64b21",
  storageBucket: "mobile-book-app-64b21.appspot.com",
  messagingSenderId: "827708886319",
  appId: "1:827708886319:web:01f08c12e472b773d225da",
  measurementId: "G-N2FX24KKTY"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };

