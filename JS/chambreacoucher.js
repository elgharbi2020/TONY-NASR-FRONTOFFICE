function addtocart(title) {
    var shopnbrtag = document.getElementById('shopcartnbr');
    //var shopnbrchar =;
    //var shopnbr = ;
    shopnbrtag.textContent = Number(shopnbrtag.textContent) + 1;


    if (shopnbrtag.classList.contains('badge-primary')){
        shopnbrtag.classList.remove('badge-primary');
        shopnbrtag.classList.add('badge-warning');
    }
    var modalbody = document.getElementById('modal-body');
    modalbody.textContent = title +  " à éte ajouter a votre panier";
}
