function importnbEtapes(){
  db.collection("cours").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        sessionStorage.setItem(doc.id , doc.data().nbrEtapes);
    });
  });
}
  
  
  function insertLocalStorageInFirebase(){
    value ={} ;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      value [key] = localStorage.getItem(localStorage.key(i)); 
    }
    console.log("value : " , value) ; 
    //db.collection('users').doc().set(value);
    if(localStorage.length > 0){
      db.collection("Progression").doc(localStorage.getItem("userId")).set(value)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    }
    else{
      console.log("local storage is empty") ;
    }
    
  }
  // END OF insert localStorage in object

  //BEGIN OF IMPORT All DATA FROM DATA BASE
  function importDataFromFirebase(){
  var docRef  = db.collection("Progression").doc(localStorage.getItem("userId"));
  docRef.get().then((doc) => {
    if (doc.exists) {
         data = doc.data();
        for (var d in data) {
          console.log("key"+d+"value"+data[d]) ;
          localStorage.setItem(d,data[d]) ;
          }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
 
  }

  // Begin  call function 

  //importDataFromFirebase();

  //insertLocalStorageInFirebase();
  
  // End Call Function
  

