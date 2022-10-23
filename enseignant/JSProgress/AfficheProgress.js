function afficheProgressParCour(){
    $('#b').show();
        
        a=sessionStorage.getItem("idclasse");
        document.getElementById('table1').innerHTML = "";
        
        db.collection('Eleve').where("idClasse", "==",a ).get().then(snapshot => {
            if( snapshot.docs.length>0){
            data= snapshot.docs
            i=0;
            data.forEach(doc => {
                i++
                
                t=`
                    <th>`+ i +`</th>
                    <td  mt-1>` +doc.data().nom +`</td>
                    <td  mt-1>` +doc.data().pren +`</td>
                    `;
                    

            var table =document.getElementById('table1');
            var tr = document.createElement('tr');
            tr.innerHTML=t;
            var row = table.appendChild(tr);
            var x = row.insertCell(3);
            

                        var docRef  = db.collection("Progression").doc(doc.id);
                        docRef.get().then((doc) => {
                          if (doc.exists) {
                               data = doc.data();
                              //for (var d in data) {
                                //console.log("key"+d+"value"+data[d]) ;
                                
                                for(i=1 ; i<=sessionStorage.getItem('nbrEtapes') ;i++){
                                    //console.log('test' , data.sessionStorage.getItem('idcours'));
                                    test = true ;
                                    for (var d in data) {
                                        
                                        if(d==(i+sessionStorage.getItem('idcours'))){
                                            console.log('exist'); 
                                            var cell1 = row.insertCell(4);   
                                            cell1.innerHTML = '<button type="button" class="btn btn-success m-1 disabled">'+i+'</button>';
                                            test = false;
                                            
                                        }
                                        
                                    }
                                    if(test){
                                        console.log('not exist');
                                        var cell1 = row.insertCell(4); 
                                        cell1.innerHTML = '<button type="button" class="btn btn-secondary m-1 disabled">'+i+'</button>'
                                    }
  
                                    
                                }
                                console.log("---------other User----------------");
                                //}
                          } else {
                              // doc.data() will be undefined in this case
                              console.log("No such document!");
                              for(i=1 ; i<=sessionStorage.getItem('nbrEtapes') ;i++){
                                var cell1 = row.insertCell(4); 
                                cell1.innerHTML = '<button type="button" class="btn btn-secondary m-1 disabled">'+i+'</button>'
                              }
                          }
                      }).catch((error) => {
                          console.log("Error getting document:", error);
                      });
                       
                        
                    

                
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