import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAmdJjYhLNIG05WnOzSKn7Fil_Co4lAq_k",
    authDomain: "bunker-s-cart.firebaseapp.com",
    projectId: "bunker-s-cart",
    storageBucket: "bunker-s-cart.appspot.com",
    messagingSenderId: "198108729243",
    appId: "1:198108729243:web:df1c8fad4340108baedb3e",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;