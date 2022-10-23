var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyAjmfyQdVWZ5Xyvocf00C4wbnSr9LtEGWU",
    authDomain: "platformeeducative.firebaseapp.com",
    projectId: "platformeeducative",
    storageBucket: "platformeeducative.appspot.com",
    messagingSenderId: "298252314462",
    appId: "1:298252314462:web:2f466d4ecdea8f1f20d1cf",
    measurementId: "G-ML3G3XZX2W"
};
if(!hasInit){
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}


