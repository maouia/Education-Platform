  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDzxakvdev4f3L0a3ckhmYtTW4-2ZsJ0lU",
    authDomain: "education-platform-cc7af.firebaseapp.com",
    projectId: "education-platform-cc7af",
    storageBucket: "education-platform-cc7af.appspot.com",
    messagingSenderId: "692885525677",
    appId: "1:692885525677:web:95795f6bbfd491c6946224",
    measurementId: "G-CG3P4JJLW4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();