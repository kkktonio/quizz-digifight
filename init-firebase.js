// Configuration & identifiants Firebase
// A récupérer sur https://console.firebase.google.com/

var firebaseConfig = {
    apiKey: "AIzaSyBuAig0vvYojujkzxeRH8LfjqQNwMrEKFE",
    authDomain: "digifight-e3138.firebaseapp.com",
    projectId: "digifight-e3138",
    storageBucket: "digifight-e3138.appspot.com",
    messagingSenderId: "907966518170",
    appId: "1:907966518170:web:4fca42552ad5c56fdb6023"
};

// Initialise votre application firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
