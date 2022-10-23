function affiche (){
 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
db.collection("UserCours").doc(user.uid)
    .onSnapshot((doc) => {
    // affiche les jeux frome la base if exist 
       // console.log("doc = " + doc.data().CoursName) ; 
       let coursname ;
        if (doc.exists) {
          if (doc.data().CoursName != null  ) {
          var ch =doc.data().CoursName;
          var c = "" ;
          ch.forEach(c => {
            var nbExercice ;
            coursname
            console.log(c) ; 
            //select nombre d'exercice
              var docRef = db.collection("cours").doc(c);
              docRef.get().then((doc) => { coursname = doc.data().name ;
              cc=`
              <div id="container" class="rounded">
              <p onclick="$('#`+c+`').toggle(400);">

              
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                   `+coursname +` </p>`;

                  cc += `<div id="`+c+`" role="toolbar" aria-label="Toolbar with button groups" style="display: none;">`;
                  for (i=1 ; i<=sessionStorage.getItem(c) ; i++){
                  cc +=`
                  <button onclick="lodeCours(\``+c+`\`,`+i+`);" type="button" class="btn btn-outline-secondary m-2 `+c+``+i+`" >`+i+`</button>`;
           
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
          else{
            cc=`<p id='test'> you dont have games  <a href='../cours/cours.html'> click here  </a> to add games </p>`;
            var a =document.getElementById('affiche');
            var div = document.createElement('div');
            div.innerHTML=cc;
            a.appendChild(div);
      
              console.log("data not found");
          }
        //affiche message d'erreur si la base est vide 
      } 
        else{
          cc=`<p id='test'> you dont have games  <a href='../cours/cours.html'> click here  </a> to add games </p>`;
          var a =document.getElementById('affiche');
          var div = document.createElement('div');
          div.innerHTML=cc;
          a.appendChild(div);
    
            console.log("data not found");


            }
        
      });
    }});
}
function lodeCours(coursname , level ){
  console.log(coursname , level ) ; 
  sessionStorage.setItem('coursname' , coursname);
  sessionStorage.setItem('level' , level-1) ; 
  setTimeout(location.href = "../../../../gamepad_blocly/"+coursname+"/demo/index.html" , 1000)
}


function add (){
affiche();
}




