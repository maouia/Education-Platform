var idclasse;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
        const demo = document.getElementById("listclass") ;
        var div = document.createElement("div") ;
        html =`<select id="listcours" class="form-select form-select" aria-label=".form-select-lg example">
        <option selected>nom de classe</option>`;
        db.collection("Classe").where("enseigiant", "==", user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    var cours = new Array();
                    cours= doc.data().cours;
                    console.log(cours);
                   
                    
                    html += "<option  value="+doc.id+','+cours+">"+doc.data().nom+"</option>";
                        /*doc.data().cours.forEach(cour => {
                        html += "<option value="+cour+">"+doc.data().nom+"</option>";
                        });*/
                });
                html +="</select>";
                div.innerHTML = html ;
                demo.appendChild(div);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    } else {
      // User is signed out
      // ...
    }
  });

  