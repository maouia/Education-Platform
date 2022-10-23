//Object Etablissement Scolaire
var ES = {
    nom ,
    logo ,
    email ,
    tel  ,
    adresse,
    etat , 
    nbrEleve : 0, 
    nbrEnseignant : 0
} ;
// declare variable to import Image
let ImgName , ImgUrl ; 
let files =[]; 
let reader ;

// load image from input and put it in img field
var loadFile = function(event) {
    var image = document.getElementById('logo');
    files =  event.target.files;
    reader = new FileReader ;
    image.src = URL.createObjectURL(files[0]);
}; 

//request all the information from html and put it in ES object
function save(){
    ES.nom = document.getElementById('nom').value;  
    ES.email = document.getElementById('email').value;
    ES.tel = document.getElementById('tel').value;
    ES.adresse = document.getElementById('adresse').value;
    if (document.getElementById("etat").checked){
        ES.etat = true ; 
    }
    else {
        ES.etat = false ; 
    };
    if(ES.nom == "" ||  ES.email =="" ||  ES.tel =="" || ES.adresse == "" || ES.etat == "" || document.getElementById("logo").src == "")
    { 
        alert("all the information required ") ;
        return false ;
    }
    else return true ; 
    
}

//create event for button Sigin
//send the image to fireStorage
//and request the dowloadUrl frol LocalStroage
//put url in the object US
//save object US in FireStore
document.getElementById("upload").onclick = function(){
    var progress ;
    var check = save();
    if(check){
    var uploadTask = firebase.storage().ref('Images/'+ES.nom + ".png").put(files[0]);
    //wait the upload of image to complete to get Download URl 
    uploadTask.on('state_changed', function(snapshot){
        progress = 
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
           ES.logo = downloadURL;
           console.log("ES" , ES);
           setTimeout(UplodeToFireStore(),3000);
           
        });
      });
    }
    else{ }
}

function UplodeToFireStore(){
    db.collection("EtablissementScolaire").doc().set(ES).then(() => {
    }).then(() => {
        console.log("Document successfully written!");
        setTimeout(() => {
            location.href = "listeEtablissementScolaire.html"
        }, 2000);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    
}