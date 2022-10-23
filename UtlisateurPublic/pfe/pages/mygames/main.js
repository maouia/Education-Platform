auth.onAuthStateChanged(function(user) {
    if(!user) {
      // No user is signed in.
      console.log("redirect");
      window.location.replace("../../Firebase/login.html");
    }
    console.log("email verified " + user.emailVerified  + " " + user.providerId);
      if (user) {
          localStorage.setItem("userId",user.uid)
          // User is signed in.
          //send the user information
          document.getElementById('name').innerHTML = user.displayName;
          const demo = document.getElementById("img_home");
          if(user.photoURL!=null){
          demo.innerHTML="<img alt='Profile Picture' class='img-responsive rounded-circle' style='max-height: 50px; max-width: 50px;'' src="+user.photoURL+">" ;
        }
        }
      });
function logout(){
  auth.signOut().then(function(){
    console.log('success');
    localStorage.clear();
    window.location.reload();
    });
}

function sentverif(user){
  user.sendEmailVerification().then(function() {}).catch(function(error) {});
} 
