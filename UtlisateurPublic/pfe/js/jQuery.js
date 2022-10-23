$(document).ready(function(){

    
    
    if ($("#hidden").val().length){
    
    $("#Login").show();
    $("#logout").hide();
     
    }
    else{
    $("#Login").hide();
    $("#logout").show();
    }
});