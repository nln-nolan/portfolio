// +------- Ajouter / Supprimer des Project -------+
// Ajouter + 1 par projet au valeur si dessous
// Diminuer - 1 par projet au valeur si dessous
const add1 = 6   // + 1 / - 1
const add2 = 5   // + 1 / - 1

const carrouselBoutonGauche = document.getElementById("carrousel-bouton-gauche");
const carrouselBoutonDroite = document.getElementById("carrousel-bouton-droite");

let item = null;
let elementValue = 0;

// Gestionnaire d'événement pour le bouton gauche du carrousel
carrouselBoutonGauche.addEventListener('click', function() {
    if (elementValue > 0) {
        elementValue -= 1;
        item = "carrousel-item-" + elementValue;
        document.getElementById(item).style.display = "block";
        carrouselBoutonDroite.style.visibility = "visible";
        carrouselBoutonGauche.style.visibility = "visible";
        if (elementValue === 0) {
            carrouselBoutonGauche.style.visibility = "hidden";
        }
        
        for (let i = 0; i < add1; i++) {
            if (i !== elementValue) {
                document.getElementById("carrousel-item-" + i).style.display = "none";
            }
        }
    }
});

// Gestionnaire d'événement pour le bouton droit du carrousel
carrouselBoutonDroite.addEventListener('click', function() {
    if (elementValue < add2) {
        elementValue += 1; 
        item = "carrousel-item-" + elementValue;
        document.getElementById(item).style.display = "block";
        carrouselBoutonDroite.style.visibility = "visible";
        carrouselBoutonGauche.style.visibility = "visible";
        if (elementValue === add2) {
            carrouselBoutonDroite.style.visibility = "hidden";
        }
        
        for (let i = 0; i < add1; i++) {
            if (i !== elementValue) {
                document.getElementById("carrousel-item-" + i).style.display = "none";
            }
        }
    }
});

// Numéro des Pages
document.addEventListener('DOMContentLoaded', function () {
    var numberPagesElements = document.querySelectorAll('.numberPages');

    numberPagesElements.forEach(function (numberPagesElement, index) {
        var h1NumberPage = numberPagesElement.querySelector('.numberPage');
    
        var numberPage = numberPagesElements.length;
        if (h1NumberPage) {
            h1NumberPage.textContent = (index + 1) + '/' + numberPage;
        }
    });
});