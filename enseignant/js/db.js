
    

    auth.onAuthStateChanged(function(user) {
        if (user) {
            document.getElementById("c").innerHTML = "";
            console.log("uid",user.uid) ; 
            db.collection("Classe").where("enseigiant", "==", user.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            
            localStorage.setItem("Idcc",doc.id);
       t=`
       <div class='square' > 

    <div  class="top" id="ttt" >
       
       <h2 > Class :  ` +doc.data().nom +`  `+doc.data().niveau  +`   </h2>
    
<br><br><br><br><br

       <table style="margin-left: 20px;">
       <tr>

       <td>
       <button class="btn btn-light  btn-sm" onClick="affiche(\``+ doc.id + `\`)" data-bs-toggle="modal" data-bs-target="#selecteleve">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-nested" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
     </svg>
       </button>

       </td
       <td>
       <button onClick="idupC(\``+ doc.id + `\`)" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#updateClass">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
           <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
           </svg>
       </button> 
   </td>      
   <td>
        <button onClick="afficheCours(\``+ doc.data().cours + `\`,\``+ doc.id+ `\`)"  type="button"  class="btn btn-success  btn-sm" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#selectcours">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
      </svg>
        </button> 
    </td>
        <td>
            <button onClick="deleteClass(\``+ doc.id + `\`)"  type="button" class="btn btn-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button> 
        </td>

       </tr>
       </table>
       </div>
       </div> 
       `;

 var a =document.getElementById('c');
    var div = document.createElement('div');
    div.style.cssText ='margin-right: 20px ;';
    div.innerHTML=t;
    a.appendChild(div);
    });

    
   

    
    });
        } else {
          // No user is signed in.
          location.href="../Admin/index.html"
          console.log("No user is signed in.");
        }
      });







  

      function afficheCours(c,idc) {
        document.getElementById('table2').innerHTML="";
       console.log(c);
       
       console.log(idc);
       //sessionStorage.removeItem("idCC");
       sessionStorage.setItem("idCC",idc);
       sessionStorage.setItem("c",c);
       console.log(sessionStorage.getItem("idCC"));
        
c=c.replaceAll(" ","");
var cour = c.split(",");
console.log(cour);
i=0;
        cour.forEach(d => { 

            document.getElementById("table2").innerHTML = "";
            db.collection("cours").doc(d)
            .onSnapshot((doc) => {
                if(doc){
                    i++
                t=`
                
                <td >` +doc.data().name +`   </td>
                <td >` +doc.data().desc +`  </td>
                <td >` +doc.data().level +`  </td>
                <td >` +doc.data().nbrEtapes +`  </td>
                <td>  
                    <button onClick="deleteCours(\``+ doc.id + `\`,\``+ idc + `\`)" type="button" class="btn btn-outline-danger btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button> 
                </td>

                <td>  

            </td>
            
            `; 
    
        var table =document.getElementById('table2');
        var tr = document.createElement('tr');
        tr.innerHTML=t;
        table.appendChild(tr);
                
}

else{
    
    t=" classe vide ";

    var a =document.getElementById('table2');
    var tr = document.createElement('tr');
    tr.innerHTML=t;
    a.appendChild(tr);

}
            });
        }); 
      
       }    






       function affiche(a){
        $('#b').show();
       
	$('#updateEleeve').hide();
    
    document.getElementById("nomEleve").value=""
    document.getElementById("pren").value=""
            sessionStorage.removeItem('idc');
            sessionStorage.setItem("idc",a);
    
            document.getElementById('table1').innerHTML = "";
            db.collection('Eleve').where("idClasse", "==",a ).get().then(snapshot => {
    
                if( snapshot.docs.length>0){
                data= snapshot.docs
    
                i=0;
    
                data.forEach(doc => {
                    i++
    
                    
                    t=`
                    
                
                        <th>`+ i +`</th>
                        <td >` +doc.data().nom +`  `+doc.data().pren +` </td>
                        <td >` +doc.data().login +`  </td>
                        <td >` +doc.data().password +`  </td>
                        <td>  
                            <button onClick="deleteEleve(\``+ doc.id + `\`)" type="button" class="btn btn-outline-danger btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button> 
                        </td>
    
                        <td>  
                        <button onClick="idupE(\``+ doc.id + `\`,\``+ doc.data().idClasse + `\`)" type="button" class="btn btn-outline-primary btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                      </svg>
                        </button> 
                    </td>
                    
                    `; 
            
                var table =document.getElementById('table1');
                var tr = document.createElement('tr');
                tr.innerHTML=t;
                table.appendChild(tr);
                });
    
    
            }
    
            else{
    
                t=" classe vide ";
    
                var a =document.getElementById('table1');
                var tr = document.createElement('tr');
                tr.innerHTML=t;
                a.appendChild(tr);
    
            }
                
                });
      
        }
    



 
    function ajoutEleve(){

        console.log(sessionStorage.getItem('idc'))

        
            if( (document.getElementById("nomEleve").value) && (document.getElementById("pren").value) ){
                var nom1=document.getElementById("nomEleve").value
                var p=document.getElementById("pren").value
                var idc=sessionStorage.getItem('idc');
                var randomstring = Math.random().toString(36).slice(-8);
                var login = nom1+p;


     

                db.collection("Eleve").doc().set({
                    nom: nom1,
                    pren: p ,
                    idClasse: idc,
                    login : login,
                    password : randomstring

                })
                .then(() => {
                    console.log("Document successfully written!");
                    //location.reload();
                    
                    affiche(sessionStorage.getItem('idc'));

                   $('#table1').reset();
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            
            
            }

            else{
                alert("tout les chons doit être validé");
            }


    }








    function ajout(){



        uid=sessionStorage.getItem('uid');
 

 if( (document.getElementById("nom").value) && (document.getElementById("n").value) ){
       var nom1=document.getElementById("nom").value;
       var n= parseInt(document.getElementById("n").value);
       console.log(n);
   


    var c=[];

    db.collection('cours').where("level", "==",n ).get().then(snapshot => {
        data= snapshot.docs
        
        data.forEach(doc => {
            c.push( doc.id);
         
          
          
            
        });
                db.collection("Classe").doc().set({
            nom: nom1,
            niveau: n ,
            enseigiant: uid,
           cours : c
        })
        .then(() => {
            console.log("Document successfully written!");
            //console.log(cc);
            location.reload();
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    });



    
   }
    else{
        alert("tout les chons doit être validé");
    }
    }






    function deleteClass(id){
        var r = confirm("Press ok to delete Classe!");
        if (r == true) {

            db.collection("Eleve").where("idClasse", "==", id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            deleteElevee(doc.id);
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

            db.collection("Classe").doc(id).delete().then(() => {

            location.reload();
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        } else {
          return false;
        }
      


    }






    function deleteCours( id,idc ){

        var r = confirm("Press ok to delete cours!");
if (r == true) {
         console.log(id , idc);
        db.collection("Classe").doc(idc).update({
            cours: firebase.firestore.FieldValue.arrayRemove(id)
        });
        //location.reload();
        setTimeout(relaod, 1000);
        function relaod() {
            //afficheCours(sessionStorage.getItem("c"),sessionStorage.getItem("idCC") );  
              location.reload(); 
              
               
          }
} else {
return false;
}
 
        }


        function deleteElevee(id){


            db.collection("Eleve").doc(id).delete().then(() => {
                location.reload();
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });

    
    
    
        }
    
    function deleteEleve(id){

        var r = confirm("Press ok to delete Eleve !");
if (r == true) {
        db.collection("Eleve").doc(id).delete().then(() => {
            affiche(localStorage.getItem("Idcc"));
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
} else {
  return false;
}



    }



function idupE(id,idc){
    $('#updateEleeve').toggle(400);
    $('#addEleeve').hide();
    document.getElementById("idEup").value=id;
    document.getElementById("idCup").value=idc;
    var docRef = db.collection("Eleve").doc(id);

    docRef.get().then((doc) => {
        if (doc.exists) {
        
            document.getElementById("nomEleveup").value=doc.data().nom;
            document.getElementById("prenup").value=doc.data().pren;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
}



function idupC(id){

    document.getElementById("idup").value=id;
    var docRef = db.collection("Classe").doc(id);

docRef.get().then((doc) => {
    if (doc.exists) {
    
        document.getElementById("nomup").value=doc.data().nom;
        document.getElementById("nup").value=doc.data().niveau;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})

}

    function updateClass () { 
         
         id=document.getElementById("idup").value;
         uid=sessionStorage.getItem('uid');
        no= document.getElementById("nomup").value;
        n= document.getElementById("nup").value;

        if(no.length>0){
            
        
    

        console.log("test     "+id);

    var docRef = db.collection("Classe").doc(id);
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log(doc.data().cours);

 db.collection("Classe").doc(id).set({
            enseigiant: uid,
            niveau:n ,
            nom: no,
            cours: doc.data().cours
            
        })
        .then(() => {
            //location.reload();
            
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
console.log(cour);
        }
        else{
            alert('tout les chons doit etre valide')
        }

      

    }


    function updateEleve () {

        if( (document.getElementById("nomEleveup").value) && (document.getElementById("prenup").value) ){
        ide=document.getElementById("idEup").value;
        idCup=document.getElementById("idCup").value;
        nom= document.getElementById("nomEleveup").value;
        pren= document.getElementById("prenup").value;

        var docRef = db.collection("Eleve").doc(ide);
        docRef.get().then((doc) => {
            if (doc.exists) {
        db.collection("Eleve").doc(ide).set({
            idClasse: idCup,
            nom:nom ,
            pren: pren,
            login : doc.data().login,
            password : doc.data().password
            
        })
        .then(() => {
            affiche(localStorage.getItem("Idcc"));
            console.log("Document successfully written!");
        })
    }
});
        
    }
    else{
        alert("tout les chons doit etre valide");
    }
    }

