var ES = {
    nom ,
    logo ,
    email ,
    tel  ,
    adresse,
} ;

// declare variable to import Image
let ImgName2 , ImgUrl2 ; 
let files2 =[]; 
let reader2 ;


// get  all the informtion ES
function updateES(id){
    console.log("id Etalissement Scolaire", id ) ;

    var docRef = db.collection("EtablissementScolaire").doc(id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data().nom);
            
            document.getElementById('updateid').value = id ;
            document.getElementById('updatename').value = doc.data().nom ;  
            document.getElementById('updateemail').value = doc.data().email;
            document.getElementById('updatetel').value = doc.data().tel;
            document.getElementById('updateadresse').value =  doc.data().adresse;
            document.getElementById('updatelogo').src =  doc.data().logo;

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

// inset img in <img> and call function
var loadFileES =function (event) {
    console.log("aaaaaaaaaaaaaa");
    console.log(event) ;
    var image2 = document.getElementById('updatelogo');
    files2 =  event.target.files;
    
    reader = new FileReader ;
    image2.src = URL.createObjectURL(files2[0]);
    ImgName2 = image2.value ;  
    uploadimgtofirestorage() ; 
};

// insert img in firebase storage
function uploadimgtofirestorage(){
    ImgName2 = Math.random().toString(36).substring(7);
    var uploadTask = firebase.storage().ref('Images/'+ImgName2+ ".png").put(files2[0]);
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
           ES.logo = downloadURL;
           
        });
      });
}

//save object US in FireStore

document.getElementById("update").onclick = function(){
    ES.nom = document.getElementById('updatename').value; 
    ES.email = document.getElementById('updateemail').value;
    ES.tel = document.getElementById('updatetel').value;
    ES.adresse = document.getElementById('updateadresse').value;

    console.log(ES);
    // appel function to create user auth in google firebase authentification
    var err = "" ; 
    if(ES.nom ==""){
        err += "nom ES required \n" ; 
    }
    if(ES.email ==""){
        err +=  "email ES required \n"  ; 
    }
    if(ES.tel ==""){
        err += "tel ES required \n" ; 
    }
    if(ES.adresse ==""){
        err += "adresse ES required \n" ; 
    }
    if(document.getElementById('logo').value ){
        err += "img ES required \n" ; 
    }
    if (err != "") {
        alert(err) ; 
    }
    else{
        updateESfirestore();
    }
}

function updateESfirestore(){
    var washingtonRef = db.collection("EtablissementScolaire").doc(document.getElementById('updateid').value);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update(ES)
    .then(() => {
        console.log("Document successfully updated!");
        location.reload() ;
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}