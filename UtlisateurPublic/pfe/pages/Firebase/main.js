
  firebase.auth().onAuthStateChanged(function(user) {
    if(!user) {
      // No user is signed in.
      console.log("redirect");
      window.location.replace("./Firebase/login.html");
    }
    console.log("email verified " + user.emailVerified);
    if(user.emailVerified==false){
      user.sendEmailVerification().then(function() {}).catch(function(error) {})
      document.body.innerHTML = 
      `<div class='container'>
      <h5>you need to check you email to verify this account </h5>
      <p> we sent a verification email `+user.email +` Please verified 
      your email adress  by clicking on the verified button in the email</p>
      <input  value="EMAIL VERIFIED" type="button"  class="btn btn-primary" onClick="location.href= './index.html'"/>
      <input  onClick="(\``+user.sendEmailVerification().then(function() {}).catch(function(error) {})+`\`)" value="RESEND VERIFICATION EMAIL" type="button"  class="btn btn-primary" />
      <input  value="Create New Account" type="button"  class="btn btn-primary" onClick="location.href='Firebase/login.html'"/>
      </div> `;
    }
      else if (user) {
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
  firebase.auth().signOut().then(function(){
    console.log('success');
    window.location.reload();
    });
}

function sentverif(user){
  user.sendEmailVerification().then(function() {}).catch(function(error) {});
} 



 /*if (user.emailVerified == false){ 
      console.log("user.emailVerified == false");
        user.sendEmailVerification().then(function() {
          // Email sent.
        }).catch(function(error) {
          console.log("error is :" + error) ; 
        });
        console.log("redirect");

      document.body.innerHTML = `<div class='verifEmail'>
                                    <h5>you need to check you email to verify this account </h5>
                                    <input  value="OK" type="button" location.href= 'index.html'/>
                                  </div>
      ` ;
    }  */