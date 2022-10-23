
var uid =sessionStorage.getItem('eleveid');
    if (uid) {
     
      
      
      console.log(sessionStorage.getItem('eleveid'));
      console.log(sessionStorage.getItem('idClasse'));
      document.getElementById('name').innerHTML = sessionStorage.getItem('nom')+' '+sessionStorage.getItem('pren');

     // $('#login').hide();

    } else {
     //$('#logout').hide();
     //location.href='../login.html';
     location.href='login.html';
     console.log("problem connection")
    }
 