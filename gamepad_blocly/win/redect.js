function rederect() {
    var uid =sessionStorage.getItem('eleveid');
    if (uid) {
        location.href='../../../eleve/eleve.html';
    }
    else {
        location.href="../../../UtlisateurPublic/pfe/pages/mygames/mygames.html"
    }
}