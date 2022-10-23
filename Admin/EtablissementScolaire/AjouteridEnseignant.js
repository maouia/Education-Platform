//object Enseigiant
var Enseigiant = {
    nom ,
    logo ,
    email ,
    tel ,
    adresse,
    role : "Enseignant",
    idES
} ;

// declare variable to import Image
let ImgName , ImgUrl ; 
let files =[]; 
let reader ;

// onclick sur la button add Enseiniant send id Etablissement scolaire to pop up
// and save id in sessionStorage
function saveidES(id){
    console.log("id Etalissement Scolaire", id) ;
    Enseigiant.idES = id ;
    sessionStorage.setItem("idES" , id) ;
    document.getElementById("idES").value = id;
}



// load image from input and put it in img field
function loadFileEnseignant(event) {
    console.log(event) ;
    var image = document.getElementById('logo');
    files =  event.target.files;
    
    reader = new FileReader ;
    image.src = URL.createObjectURL(files[0]);
    ImgName = image.value ;
    uploadimgEnseigianttofirestorage() ; 
};

//save object US in FireStore
document.getElementById("upload").onclick = function(){
    save();
    
    
}

//requEnseigiantt all the information from html and put it in Enseigiant object
function save(){
    Enseigiant.nom = document.getElementById('nom').value; 
    Enseigiant.email = document.getElementById('email').value;
    Enseigiant.tel = document.getElementById('tel').value;
    Enseigiant.adresse = document.getElementById('adresse').value;
    Enseigiant.idES = document.getElementById('idES').value;
    console.log(Enseigiant);
    // appel function to create user auth in google firebase authentification
    var err = "" ; 
    if(Enseigiant.nom ==""){
        err += "nom Enseigiant required \n" ; 
    }
    if(Enseigiant.email ==""){
        err +=  "email Enseigiant required \n"  ; 
    }
    if(Enseigiant.tel ==""){
        err += "tel Enseigiant required \n" ; 
    }
    if(Enseigiant.adresse ==""){
        err += "adresse Enseigiant required \n" ; 
    }
    if(document.getElementById("logo").src == "" ){
        err += "img Enseigiant required \n" ; 
    }
    if (err != "") {
        alert(err) ; 
    }
    else{
        createLoginEmail() ;
        
    }
}

//create login mail with random mtp
//then send email to user for change password
function createLoginEmail(){
    //check if user login
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        console.log(user) ;
        } else {
        location.href ="../index.html"
        }
        });
        var mtp = Math.random().toString(36).slice(-8);
        console.log("email" ,Enseigiant.email , " " , "password" , mtp) ;
        firebase.auth().createUserWithEmailAndPassword(Enseigiant.email, mtp)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("idEnseigiant" , user.uid);
            sessionStorage.setItem("idEnseigiant" , user.uid);
            UplodeToFireStore();
            updatenombreEnseigiant();
           firebase.auth().signInWithEmailAndPassword("omar@gmail.com", "123456")
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            // send messege to email with the information
            firebase.auth().sendPasswordResetEmail(Enseigiant.email).then(function() {
                // Email sent.
              }).catch(function(error) {
                // An error happened.
              });
            // ...
        })
    .catch((error) => {
        //alert("there is problem win create login \n email "+Enseigiant.email + " is alrady in use") ; 
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode) ; 
        alert(errorMessage);
        // ..
    });
    
    }
//send the image to fireStorage
//and request the dowloadUrl frol LocalStroage
//put url in the object US
function uploadimgEnseigianttofirestorage(){
        let ImgName = Math.random().toString(36).substring(7);
        var uploadTask = firebase.storage().ref('Images/'+ImgName+ ".png").put(files[0]);
        //wait the upload of image to complete to get Download URl 
        uploadTask.on('state_changed', function(snapshot){
            var progress = 
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING:
                  console.log('Upload is running');
                  break;
              }
          }, function(error) {console.log(error);
          }, function() {
    
               // get the uploaded image url back
               uploadTask.snapshot.ref.getDownloadURL().then(
                function(downloadURL) {
    
               // You get your url from here
                console.log('File available at', downloadURL);
    
              // print the image url 
               console.log(downloadURL);
               Enseigiant.logo = downloadURL;
               
               
            });
          });
}
//create event for button Sigin



function UplodeToFireStore(){
    db.collection("Enseigiant").doc(sessionStorage.getItem("idEnseigiant")).set(Enseigiant).then(() => {
    }).then(() => {
        console.log("Document successfully written!");
        location.reload() ; 
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        alert("Problem insertion Enseigiant ") ; 
    });
    
}

// add 1 to numbre Enseigiant
function updatenombreEnseigiant(){
    var nbrEnseignant ; 
    
    var docRef = db.collection("EtablissementScolaire").doc(document.getElementById("idES").value);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("nombre Enseigiant first:", doc.data().nbrEnseignant);
            nbrEnseignant = doc.data().nbrEnseignant ; 
            update();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

        function update(){
            // To update age and favorite color:
        nbrEnseignant++;
        db.collection("EtablissementScolaire").doc(document.getElementById("idES").value).update({
            "nbrEnseignant": nbrEnseignant,
        })
        .then(() => {
            console.log("Document successfully updated!");
            
        });
        console.log("nombre de Enseignant secend " , nbrEnseignant) ; 
        
        
    } 
   
}
