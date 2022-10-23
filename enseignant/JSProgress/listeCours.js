function savecoursid(){
    listofCours = document.getElementById('selectCours').value ;
    const arrayCours = listofCours.split(','); 
    sessionStorage.setItem('nbrEtapes',arrayCours[0]);
    sessionStorage.setItem('idcours', arrayCours[1]);

    
    document.getElementById("divbtnAfficheProgress").style.display = 'flex' ;
}
function selectCours(){
            const democours = document.getElementById("selectCours");
            var divcours = document.createElement("div");
            listofCours = document.getElementById('listcours').value;
            const arrayCours = listofCours.split(',');
            
            sessionStorage.setItem('idclasse',arrayCours[0]);
            for (i=1 ; i<arrayCours.length ; i++){
                var docRef = db.collection("cours").doc(arrayCours[i]);
                    docRef.get().then((doc) => {
                        var html1 =''
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            var option = document.createElement("option");
                            option.text = doc.data().name;
                            
                            option.value = doc.data().nbrEtapes + ',' + doc.id;
                            option.id = 'selectCours';
                            democours.add(option);
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    }); 
                }
            
                document.getElementById("listCours").style.display = 'flex' ;
            
        
      
}