
 /* var data2 = {}
  db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      data2 = (doc.data()); 
  });
  
  //localStorage.setItem("Storage" , data2.data)  ;
  });
  //localStorage.clear();
*/
  // BEGIN OF insert localStorage in object
  function insertLocalStorageInFirebase(){
    
    value ={} ;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      value [key] = localStorage.getItem(localStorage.key(i)); 
    }
    console.log("value : " , value) ; 
    //db.collection('users').doc().set(value) ;
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
      console.log("local storage is empty")  ;
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

  importDataFromFirebase();
  insertLocalStorageInFirebase();
  
  // End Call Function
  
  /*db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log (doc.data()) ; 
         data = doc.data() ; 
    });
    console.log(data);
    for (var d in data) {
      localStorage.setItem(d,data[d]) ; 
    }
    console.log(localStorage);
});*/
//console.log(sessionStorage);
 
  //END OF IMPORT DATA FROM DATA BASE
 

  // Add a new document in collection "cities"


  //var x = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAq5EuwGXS1vRpD8vdmvTQnRWHT3r8nIpA:[DEFAULT]'));
  /*var x = JSON.parse(localStorage.getItem('1true'));
  var x = JSON.parse(localStorage.getItem('BlockLibraryStorage.blockLibrary'));
  var x = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAq5EuwGXS1vRpD8vdmvTQnRWHT3r8nIpA:[DEFAULT]'));
  var x = JSON.parse(localStorage.getItem('length'));

  var x = JSON.parse(localStorage.getItem('1true'));*/
  //data ={} ; 
  //var data =(` ${JSON.stringify(localStorage)}`) ; 
  //data = localStorage ; 
 /* for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
  }*/

  //console.log(data);
  
  //db.collection('users').doc().set(data) ; 

  /*db.collection("users").add({
    
  })*/
 /* for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    value={}  
    value [key] = localStorage.getItem(localStorage.key(i));
    data = data + value ; 
   // data[i] = {key : value }  ;
    console.log (value); 
    
    //localStorage = value  ; 
 }*/



 /*for (let d in data){
   console.log(data[d]) ; 
 }*/
// console.log( localStorage);

