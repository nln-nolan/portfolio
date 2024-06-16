// +------- Ajouter / Supprimer des Project -------+
// Ajouter + 1 par projet au valeur si dessous
// Diminuer - 1 par projet au valeur si dessous
const Padd1 = 11   // + 1 / - 1
const Padd2 = 10   // + 1 / - 1

const projectCarrouselLeftButton = document.getElementById("projectCarrouselLeftButton");
const projectCarrouselRightButton = document.getElementById("projectCarrouselRightButton");

let Pitem = null;
let PelementValue = 0;

// Gestionnaire d'événement pour le bouton gauche du carrousel
projectCarrouselLeftButton.addEventListener('click', function() {
    if (PelementValue > 0) {
        PelementValue -= 1;
        Pitem = "projectCarrouselItem-" + PelementValue;
        document.getElementById(Pitem).style.display = "block";
        projectCarrouselRightButton.style.visibility = "visible";
        projectCarrouselLeftButton.style.visibility = "visible";
        if (PelementValue === 0) {
            projectCarrouselLeftButton.style.visibility = "hidden";
        }
        
        for (let i = 0; i < Padd1; i++) {
            if (i !== PelementValue) {
                document.getElementById("projectCarrouselItem-" + i).style.display = "none";
            }
        }
    }
});

// Gestionnaire d'événement pour le bouton droit du carrousel
projectCarrouselRightButton.addEventListener('click', function() {
    if (PelementValue < Padd2) {
        PelementValue += 1; 
        Pitem = "projectCarrouselItem-" + PelementValue;
        document.getElementById(Pitem).style.display = "block";
        projectCarrouselRightButton.style.visibility = "visible";
        projectCarrouselLeftButton.style.visibility = "visible";
        if (PelementValue === Padd2) {
            projectCarrouselRightButton.style.visibility = "hidden";
        }
        
        for (let i = 0; i < Padd1; i++) {
            if (i !== PelementValue) {
                document.getElementById("projectCarrouselItem-" + i).style.display = "none";
            }
        }
    }
});

// Numéro des Pages
document.addEventListener('DOMContentLoaded', function () {
    var projectNumberPagesElements = document.querySelectorAll('.ProjectNumberPages');

    projectNumberPagesElements.forEach(function (projectNumberPagesElement, index) {
        var Ph1NumberPage = projectNumberPagesElement.querySelector('.ProjectNumberPage');
    
        var PnumberPage = projectNumberPagesElements.length;
        if (Ph1NumberPage) {
            Ph1NumberPage.textContent = (index + 1) + '/' + PnumberPage;
        }
    });
});