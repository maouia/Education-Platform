function validClasseNameUpdate() {
 n=document.getElementById('nomup').value;
    if(n.length>0  ){
        document.getElementById('nomup').className ="form-control is-valid";
    }else{
        document.getElementById('nomup').className ="form-control is-invalid";
    }
}


function validEleveNameAdd() {
    n=document.getElementById('nomEleve').value;
       if(n.length>0  ){
           document.getElementById('nomEleve').className ="form-control is-valid";
       }else{
           document.getElementById('nomEleve').className ="form-control is-invalid";
       }
   }

   
function validElevePrenAdd() {
    n=document.getElementById('pren').value;
       if(n.length>0  ){
           document.getElementById('pren').className ="form-control is-valid";
       }else{
           document.getElementById('pren').className ="form-control is-invalid";
       }
   }


   function validEleveNomUpdate() {
    n=document.getElementById('nomEleveup').value;
       if(n.length>0  ){
           document.getElementById('nomEleveup').className ="form-control is-valid";
       }else{
           document.getElementById('nomEleveup').className ="form-control is-invalid";
       }
   }

   function validElevePrenUpdate() {
    n=document.getElementById('prenup').value;
       if(n.length>0  ){
           document.getElementById('prenup').className ="form-control is-valid";
       }else{
           document.getElementById('prenup').className ="form-control is-invalid";
       }
   }

   function validClasseNomAdd() {
    n=document.getElementById('nom').value;
       if(n.length>0  ){
           document.getElementById('nom').className ="form-control is-valid";
       }else{
           document.getElementById('nom').className ="form-control is-invalid";
       }
   }