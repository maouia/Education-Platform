firebase.auth().onAuthStateChanged(function(user) {
    if(!user) {
      // No user is signed in.
      console.log("redirect");
     //window.location.replace("../Admin/index.html");
    }
    else {

        sessionStorage.setItem("uid",user.uid);
        
          // User is signed in.
          //send the user information
          var docRef = db.collection("Enseigiant").doc(user.uid);
          
          docRef.get().then((doc) => {
              if (doc.exists) {
                  
                  document.getElementById('name').innerHTML = doc.data().nom;
                  demo.innerHTML="<img alt='Profile Picture' class='img-responsive rounded-circle' style='max-height: 50px; max-width: 50px;'' src="+doc.data().logo+">" ;
              } 
              else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                  //document.getElementById('name').innerHTML = user.email;
                  // win add enseigiant return the login to admin
                 

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


