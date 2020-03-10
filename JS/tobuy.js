function updateQte(idarticle,operation,idPrix,prix) {
    var qteChr = document.getElementById(idarticle);
    var prixChr = document.getElementById(idPrix);

    if (operation=="add") {
        qteChr.textContent = Number(qteChr.textContent) + 1 ;
        prixChr.textContent = Number(prixChr.textContent) + prix ;
    } else {
        if (Number(qteChr.textContent)>1) {
            qteChr.textContent = Number(qteChr.textContent) - 1 ;
            prixChr.textContent = Number(prixChr.textContent) - prix ;

        }
    }
}

function removeFromCart(idRowarticle){
    var row = document.getElementById(idRowarticle);
    row.remove();
    var products = document.getElementsByClassName('product');
    var myalertDiv = document.getElementById('aucunproduit');

    if(products.length == 0) {
        myalertDiv.classList.remove('d-none');
    }
}