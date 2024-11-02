// +------- Ajouter / Supprimer des Project -------+
// Ajouter + 1 par projet au valeur si dessous
// Diminuer - 1 par projet au valeur si dessous
const Cadd1 = 6   // + 1 / - 1
const Cadd2 = 5   // + 1 / - 1

const creationCarrouselLeftButton = document.getElementById("creationCarrouselLeftButton");
const creationCarrouselRightButton = document.getElementById("creationCarrouselRightButton");

let Citem = null;
let CelementValue = 0;

// Gestionnaire d'événement pour le bouton gauche du carrousel
creationCarrouselLeftButton.addEventListener('click', function() {
    if (CelementValue > 0) {
        CelementValue -= 1;
        Citem = "creationCarrouselItem-" + CelementValue;
        document.getElementById(Citem).style.display = "block";
        creationCarrouselRightButton.style.visibility = "visible";
        creationCarrouselLeftButton.style.visibility = "visible";
        if (CelementValue === 0) {
            creationCarrouselLeftButton.style.visibility = "hidden";
        }
        
        for (let i = 0; i < Cadd1; i++) {
            if (i !== CelementValue) {
                document.getElementById("creationCarrouselItem-" + i).style.display = "none";
            }
        }
    }
});

// Gestionnaire d'événement pour le bouton droit du carrousel
creationCarrouselRightButton.addEventListener('click', function() {
    if (CelementValue < Cadd2) {
        CelementValue += 1; 
        Citem = "creationCarrouselItem-" + CelementValue;
        document.getElementById(Citem).style.display = "block";
        creationCarrouselRightButton.style.visibility = "visible";
        creationCarrouselLeftButton.style.visibility = "visible";
        if (CelementValue === Cadd2) {
            creationCarrouselRightButton.style.visibility = "hidden";
        }
        
        for (let i = 0; i < Cadd1; i++) {
            if (i !== CelementValue) {
                document.getElementById("creationCarrouselItem-" + i).style.display = "none";
            }
        }
    }
});

// Numéro des Pages
document.addEventListener('DOMContentLoaded', function () {
    var creationNumberPagesElements = document.querySelectorAll('.creationNumberPages');

    creationNumberPagesElements.forEach(function (creationNumberPagesElement, index) {
        var Ch1NumberPage = creationNumberPagesElement.querySelector('.creationNumberPage');
    
        var CnumberPage = creationNumberPagesElements.length;
        if (Ch1NumberPage) {
            Ch1NumberPage.textContent = (index + 1) + '/' + CnumberPage;
        }
    });
});