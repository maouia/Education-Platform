
    //insert local storage in firebase
    function saveandpasse(){
            var value ={} ;
                for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                value [key] = localStorage.getItem(localStorage.key(i)); 
                }
                console.log("value : " , value) ; 
                //db.collection('users').doc().set(value);
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
                console.log("local storage is empty") ;
                }
                nextlevel = sessionStorage.getItem('level')- 1+2 ;
                sessionStorage.setItem('level' , nextlevel) ; 
                game.loadLevel(levels[id = nextlevel ]);
                $('#ModalYouWin').modal('hide');
        }
        //delete bolocks from local storage and lode page
        function rest(){
            levelId = sessionStorage.getItem('level')-1+2 + sessionStorage.getItem('coursname') ;
            localStorage.removeItem(levelId);
            setTimeout(() => {
            location.reload();    
            }, 500);
            
            
        }
        //save progress in firebase and go home page
        function saveandGoToHomePage(){
            var value ={} ;
                for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                value [key] = localStorage.getItem(localStorage.key(i)); 
                }
                console.log("value : " , value) ; 
                //db.collection('users').doc().set(value);
                if(localStorage.length > 0){
                db.collection("Progression").doc(localStorage.getItem("userId")).set(value)
                .then(() => {
                    console.log("Document successfully written!");
                    location.href="../../../UtlisateurPublic/pfe/pages/mygames/mygames.html"
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
                }
                else{
                console.log("local storage is empty") ;
                }
                /*nextlevel = sessionStorage.getItem('level')- 1+2 ;
                sessionStorage.setItem('level' , nextlevel) ; 
                game.loadLevel(levels[id = nextlevel ]);*/
                
                $('#ModalYouWin').modal('hide');
        }
        //hide btn next exercice because it is the last one
        function lastexercice(){
            //alert(sessionStorage.getItem('level') +"=="+ sessionStorage.getItem('maze')-1);
            if(sessionStorage.getItem('level') == sessionStorage.getItem('maze')-1){
                    document.getElementById("btnSaveAndPasse").style.display = "none";
                }
    }
    function bottonProgress(){
        coursname = sessionStorage.getItem('coursname');
        nbrExercice = sessionStorage.getItem(coursname);
           
        for (i=1 ;i<=nbrExercice ; i++){
            if(i==sessionStorage.getItem('level')-1+2){
                document.getElementById('level_'+(sessionStorage.getItem('level')-1+2)).style.backgroundColor = ' #aaa ';
                document.getElementById('level_'+(sessionStorage.getItem('level')-1+2)).style.boxShadow = "0px 15px 20px rgba(112, 123, 124, 0.4);";
            }
            else if((localStorage.getItem(i+coursname))){
                document.getElementById('level_'+i).style.backgroundColor = 'rgb(60, 201, 17) ';
                document.getElementById('level_'+i).style.boxShadow = "0px 15px 20px rgba(112, 123, 124, 0.4);";
            }
            else {
                document.getElementById('level_'+i).style.backgroundColor = 'rgb(255, 255, 255)';
                document.getElementById('level_'+i).style.boxShadow = "0px 15px 20px rgba(112, 123, 124, 0.4);";
            }
        }
        
    }
