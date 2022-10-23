




function checkname(){
    nom = document.getElementById('nom').value;
    console.log(nom);
    if(nom.length >= 3  ){
        document.getElementById('nom').className ="form-control is-valid";
    }else{
        document.getElementById('nom').className ="form-control is-invalid";
    }
}
function checkemail(){
    email = document.getElementById('email').value;
    console.log(email);
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat) ){
        document.getElementById('email').className ="form-control is-valid";
    }else{
        document.getElementById('email').className ="form-control is-invalid";
    }
}

function checketel(){
    tel = document.getElementById('tel').value;
    if(tel != "" ){
        document.getElementById('tel').className ="form-control is-valid";
    }else{
        document.getElementById('tel').className ="form-control is-invalid";
    }
}
function checkadr(){
    adresse = document.getElementById('adresse').value;
    if(adresse.length >= 3  ){
        document.getElementById('adresse').className ="form-control is-valid";
    }else{
        document.getElementById('adresse').className ="form-control is-invalid";
    }
}