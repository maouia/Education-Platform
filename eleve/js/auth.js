
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


function logoutEleve(){
  
    sessionStorage.removeItem("eleveid");
    sessionStorage.removeItem("idClasse");
    sessionStorage.removeItem("nom");
    sessionStorage.removeItem("pren");
    console.log("user signed out");
    
    location.href='login.html';
  





}



// login
const signupForm = document.querySelector('#login');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // sign up the user
  db.collection("Eleve").where("login", "==", email).where("password", "==", password)
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        window.location.href = 'eleve.html';

        sessionStorage.setItem("eleveid",doc.id);
        sessionStorage.setItem("idClasse",doc.data().idClasse);
        sessionStorage.setItem("nom",doc.data().nom);
        sessionStorage.setItem("pren",doc.data().pren);
        localStorage.setItem('userId',doc.id);
        
          
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
});