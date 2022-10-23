

function GetCoursFromFirebase(cours){
    var userId =localStorage.getItem("userId") ; 
    db.collection("cours").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            cours = doc.data();
            console.log(cours);
            const demo = document.getElementById("grid-container") ; 
            var div = document.createElement("div") ;
            let html =
                        `<h5 class='Coursname'> ` +cours.name+ `</h5>   
                            <div class="header_grid">
                                <img class='m-1'src="img/`+doc.id+`.png">
                            <div>
                                <div class="desc">
                                    <p class='Coursdesc'> `+ cours.desc+`</p>
                                    <p class='Courslevel' > `+cours.level+` : مستوى الدورة</p>
                                    <p class='CoursnbrEtapes'> `+cours.nbrEtapes+`: عدد التمرين</p>
                                   
                                <div>
                        `;
                      console.log( "id classe"+ sessionStorage.getItem("idCC"));
            // check if game exist show blue alse grenn with add to my games
            docRef = db.collection("Classe").doc(sessionStorage.getItem("idCC"));
            docRef.get().then((doc1) => {
                if (doc1.exists ) {
                    var UserCours = doc1.data().cours ;
                    console.log("doc id =" + doc.id + "" + UserCours)  ; 
                    var a = UserCours.indexOf(doc.id, 0);
                    console.log("index of " + doc.id + " in array " + UserCours + " = " + a)  ; 
                    if(a>=0){
                        html = html + `<input onClick="location.href='./enseignant.html' " type="button" value="دورة مضافة" id=\`` + doc.id + `\` class="btn btn-primary "/>`;
                        div.innerHTML = html ; 
                        demo.appendChild(div);
                    }
                    else {
                        html = html + `<input onClick="saveCours(\`` + doc.id + `\`)" type="button" value="اضافة الدورة" id=\`` + doc.id + `\` class="btn btn-success"/>`;
                        div.innerHTML = html ; 
                        demo.appendChild(div);
                    }
                }
                else{
                    html = html + `<input onClick="saveCours(\`` + doc.id + `\`)" type="button" value="الضافة الدورة" id=\`` + doc.id + `\` class="btn btn-success"/>`;
                    div.innerHTML = html ; 
                    demo.appendChild(div);
                }
            });
        });
    });
}
GetCoursFromFirebase();





function saveCours(name){
     
    //check if UserCours existe and if not existe then create 
    var docRef = db.collection("Classe").doc(sessionStorage.getItem("idCC"));
    docRef.get().then((doc) => {
        if (doc.exists && doc.data().cours != null) {
            var UserCours = doc.data().cours ;
            var a = UserCours.indexOf(name, 0);
            if(a>=0){
            alert("this Game is already exists in your Games ") ;
            document.getElementById(name).disabled = true; 

            }
            else {
                UpdateUserCours(name) ;
            }
        }
        else {
            // doc.data() will be undefined in this case
            //create and insert empty array UserCours
            db.collection("Classe").doc(sessionStorage.getItem("idCC")).set({
                cours : []
            })
            .then(() => {   
              console.log("this function run win you add the cours in the first time ");
            })
            .catch((error) => {
              console.error("Error writing document empty cours user: ", error);
            });
            UpdateUserCours(name) ;
            
          } 
        
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
    }

    function UpdateUserCours(name){
        console.log( "function update " + name, " :", sessionStorage.getItem("idCC"));
        var washingtonRef = db.collection("Classe").doc(sessionStorage.getItem("idCC"));
        // Atomically add a new region to the "regions" array field.
        washingtonRef.update({
            cours: firebase.firestore.FieldValue.arrayUnion(name)
        });
        alert("the cours "+name+" has been aded to your courses");
        
        setTimeout(relaod, 1000);
        function relaod() {
            location.reload();
          }

    }
 