
/*

// signup
const signupForm = document.querySelector('#login');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form

    signupForm.reset();
  });
});



*/





//logout


function logout(){
  auth.signOut().then(()=>{
    console.log("user signed out");
    sessionStorage.clear();
    
  
  });


location.href='../../index.html';


}



// login
const signupForm = document.querySelector('#login');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // sign up the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
   
    location.href='enseignant.html';
    console.log("login sucsess");
    // close the signup modal & reset form

    
  });
});