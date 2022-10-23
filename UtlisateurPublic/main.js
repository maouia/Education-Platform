

firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          localStorage.setItem("userId",user.uid)
          //User is signed in.
          //send the user information
          document.getElementById( 'name').innerHTML = user.displayName;
          const demo = document.getElementById("img_home");
          demo.innerHTML="<img alt='Profile Picture' class='img-responsive rounded-circle ' style='max-height: 50px; max-width: 50px;'' src="+user.photoURL+">" ;
        }
        else {
          // No user is signed in.
          console.log("redirect");
          window.location.replace("../../Firebase/login.html");
        }
      });

function logout(){
  firebase.auth().signOut().then(function(){
    localStorage.clear();
    console.log('success');
    window.location.reload();
    });
}