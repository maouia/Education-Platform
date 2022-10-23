var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {

    apiKey: "AIzaSyDzxakvdev4f3L0a3ckhmYtTW4-2ZsJ0lU",
    authDomain: "education-platform-cc7af.firebaseapp.com",
    projectId: "education-platform-cc7af",
    storageBucket: "education-platform-cc7af.appspot.com",
    messagingSenderId: "692885525677",
    appId: "1:692885525677:web:95795f6bbfd491c6946224",
    measurementId: "G-CG3P4JJLW4"
};
if(!hasInit){
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
    
}

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '../index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '../index.html'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

// get user information 
