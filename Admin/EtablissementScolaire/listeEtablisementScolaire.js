var ES ;

function GetEtablissementScolaireFromFirebase(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          //console.log(user);
          // insert page liste ES to be vide 
          document.getElementById("grid-container").innerHTML = "" ; 
          db.collection("EtablissementScolaire").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                ES = doc.data();
                sessionStorage.setItem("idES" , doc.id) ; 

                //console.log("ES" ,doc.id ,"=>" , ES) ;
                document.getElementById("idES").value = doc.id ;
                
                const demo = document.getElementById("grid-container") ;
                var div = document.createElement("div") ;
                let html =
                        `<h5 class='ESname'> Etablissement Scolaire: ` +ES.nom+ `</h5>   
                                <div class="header_grid">
                                    <img class="logo_ES" src="`+ES.logo+ `">
                                <div>
                                <div class="desc">
                                    <p class='adresseEnseigiant'> <b>Adresse</b> :`+ES.adresse+`</p>
                                    <p class='emailEnseignant'> <b>Email</b> :`+ES.email+`</p>
                                    <p class='tel'> <b>numero de telphone</b> :`+ ES.tel+`</p>
                                    <p class='nbrEleve' > <b>nombre des eleves</b> :`+ES.nbrEleve+`</p>
                                    <p class='nbrEnseignant'> <b>nombre de Enseignant</b> :`+ES.nbrEnseignant+`</p>
                                    <div class='Enseignant'>
                                        <button onClick="GetEnseigiantFromFirebase(\`` + doc.id + `\`)" type="button" class="btn btn-primary bi bi-plus m-1" data-bs-toggle="modal" data-bs-target="#listEnseigiant">Affiche `+ES.nbrEnseignant+` Enseignant</button>
                                        <button onClick="saveidES(\`` + doc.id + `\`)" type="button" class="btn btn-success bi bi-plus m-1" data-bs-toggle="modal" data-bs-target="#AjouterEnseigiant">Ajout Enseignant</button>
                                        <button onClick="updateES(\`` + doc.id +`\`)" type="button" class="btn btn-warning bi bi-plus m-1" data-bs-toggle="modal" data-bs-target="#updateES">Update</button>
                                    </div>
                                <div>
                `;
                div.innerHTML = html ;
                demo.appendChild(div);
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            });
        });
        } else {
          // No user is signed in.
          console.log("No user is signed in.");
        }
      });

    
}
GetEtablissementScolaireFromFirebase();


function search(){
    var name = document.getElementById("search").value.toLowerCase() ;
    document.getElementById("grid-container").innerHTML = "" ;
    const demo = document.getElementById("grid-container") ; 
    
    console.log(name) ; 
    db.collection("EtablissementScolaire").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            ES = doc.data();
            sessionStorage.setItem("idES" , doc.id) ; 
            document.getElementById("idES").value = doc.id ; 
            var div = document.createElement("div") ;
            div.innerHTML = "" ;
            //console.log("ES" ,doc.id ,"=>" , ES) ;
            if(doc.data().nom.toLowerCase().includes(name)){
           
            let html =
                    `<h5 class='ESname'> Etablissement Scolaire: ` +ES.nom+ `</h5>   
                            <div class="header_grid">
                                <img class="logo_ES" src="`+ES.logo+ `">
                            <div>
                            <div class="desc">
                                <p class='adresseEnseigiant'> <b>Adresse</b> :`+ES.adresse+`</p>
                                <p class='emailEnseignant'> <b>Email</b> :`+ES.email+`</p>
                                <p class='tel'> <b>numero de telphone</b> :`+ ES.tel+`</p>
                                <p class='nbrEleve' > <b>nombre des eleves</b> :`+ES.nbrEleve+`</p>
                                <p class='nbrEnseignant'> <b>nombre de Enseignant</b> :`+ES.nbrEnseignant+`</p>
                                <div class='Enseignant'>
                                    <button onClick="GetEnseigiantFromFirebase(\`` + doc.id + `\`)" type="button" class="btn btn-primary bi bi-plus m-1" data-bs-toggle="modal" data-bs-target="#listEnseigiant">Affiche `+ES.nbrEnseignant+` Enseignant</button>
                                    <button onClick="saveidES(\`` + doc.id + `\`)" type="button" class="btn btn-success bi bi-plus m-1" data-bs-toggle="modal" data-bs-target="#AjouterEnseigiant">Ajout Enseignant</button>
                                    <button onClick="updateES(\`` + doc.id +`\`)" type="button" class="btn btn-warning bi bi-plus m-1" data-bs-toggle="modal" data-bs-target="#updateES">Update</button>
                                </div>
                            <div>
            `;
            div.innerHTML = html ;
            demo.appendChild(div);
            }
            else if(name == null){
                GetEtablissementScolaireFromFirebase();
            }
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
        });
    });
}





 