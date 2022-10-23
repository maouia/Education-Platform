firebase.auth().onAuthStateChanged(function(user) {
    if(!user) {
      // No user is signed in.
      console.log("redirect");
      window.location.replace("../index.html");
    }
    else {
          // User is signed in.
          //send the user information
          var docRef = db.collection("Enseigiant").doc(user.uid);
          console.log(user.uid);
          docRef.get().then((doc) => {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
                  document.getElementById('name').innerHTML = doc.data().name;
                  demo.innerHTML="<img alt='Profile Picture' class='img-responsive rounded-circle' style='max-height: 50px; max-width: 50px;'' src="+doc.data().img+">" ;
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                  //document.getElementById('name').innerHTML = user.email;
                  // win add enseigiant return the login to admin
                  firebase.auth().signInWithEmailAndPassword("omar@gmail.com", "123456")
                  .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    
                    // ...
                  })
                  .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
  });
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
          const demo = document.getElementById("img_home");
          
        }
      });

function logout(){
  firebase.auth().signOut().then(function(){
    console.log('success');
    localStorage.clear();
    window.location.reload();
    });
}


