




         function affiche (){
 
          
            
              console.log('idClasse '+sessionStorage.getItem("idClasse"));
              var docRef = db.collection("Classe").doc(sessionStorage.getItem("idClasse"));

              docRef.get().then((doc) => {
                  if (doc.exists) {
                    console.log("data=>"+doc.data());
                  if (doc.data().cours != null  ) {
                  var ch =doc.data().cours;
                  
                  ch.forEach(c => {
                    
                   // cours
                    //console.log("ccc "+cours) ; 
                    //select nombre d'exercice
                      var docRef = db.collection("cours").doc(c);
                      docRef.get().then((doc) => { cours = doc.data().name ;
                        console.log('icicic  '+doc.id)
                      cc=`
                      <div id="container" class="rounded">
                      <p onclick="$('#`+doc.id+`').toggle(400);">
        
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                      </svg>
                       `+cours +` </p>`;
    
                      cc += `<div id="`+c+`"style="display: none"">`;
                      for (i=1 ; i<=sessionStorage.getItem(c) ; i++){
                      cc +=`
                      <p class="`+c+``+c+``+i+`">
                      <button onclick="lodeCours(\``+c+`\`,`+i+`);" type="button" class="btn btn-outline-secondary btn-sm `+c+``+i+`" >`+i+`</button>`;
                      cc += cours+" التمارين رقم "; 
                      cc +=`</p>`             
                      }                   
                      cc += `</div>`;
        
                      var a =document.getElementById('affiche');
                      var div = document.createElement('div');
                      div.innerHTML=cc;
                      a.appendChild(div);
                      progress();
                    
                     });
        
                    
                      
                   
                  
                    
                      
                  
        
                  //hide the liste of game in first load
              
                  });
        
                  }
   
                //affiche message d'erreur si la base est vide 
              } 
              else{
                console.log('icicic  ')
              }
             
                
              });
            }
        
        function lodeCours(cours , level ){
          console.log(cours , level ) ; 
          sessionStorage.setItem('level' , level-1); 
          sessionStorage.setItem('coursname' , cours); 
          setTimeout(location.href = "../gamepad_blocly/"+cours+"/demo/index.html" , 1000)
        }
        
        
        function add (){
        affiche();
        }
      