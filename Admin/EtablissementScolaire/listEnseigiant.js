function GetEnseigiantFromFirebase(id){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          //console.log(user);
          document.getElementById("grid-container-list").innerHTML = "";
          db.collection("Enseigiant").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                Enseigiant = doc.data();
                console.log("idES : " , id) ; 
                if (Enseigiant.idES == id){
                const demo = document.getElementById("grid-container-list") ;
                var div = document.createElement("div") ;
                let html =
                        `<h5 class='Enseigiantname'> Enseigiant : ` +Enseigiant.nom+ `</h5>   
                                <div class="header_grid">
                                    <img class="logo_Enseigiant" src="`+Enseigiant.logo+ `">
                                <div>
                                <div class="desc">
                                    <p class='adresseEnseigiant'> <b>Adresse</b> :`+Enseigiant.adresse+`</p>
                                    <p class='emailEnseignant'> Email Enseignant :`+Enseigiant.email+`</p>
                                    <p class='tel'> numero de telphone :`+ Enseigiant.tel+`</p>
                                    
                                <div>
                `;
                div.innerHTML = html ;
                demo.appendChild(div);
            }
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

