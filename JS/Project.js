// pour ajouter d'autre image il suffi de changer les haute valeur exemple for (let i = 0; i < 5; i++) en -> for (let i = 0; i < 6; i++) et if (elementValue === 4) en -> if (elementValue === 5)

const carrouselBoutonGauche = document.getElementById("carrousel-bouton-gauche");
const carrouselBoutonDroite = document.getElementById("carrousel-bouton-droite");

let item = null;
let elementValue = 0;

// Gestionnaire d'événement pour le bouton gauche du carrousel
carrouselBoutonGauche.addEventListener('click', function() {
    if (elementValue > 0) { // Vérifie si l'élément actuel n'est pas le premier
        elementValue -= 1;
        item = "carrousel-item-" + elementValue;
        document.getElementById(item).style.display = "block";
        carrouselBoutonDroite.style.visibility = "visible";
        carrouselBoutonGauche.style.visibility = "visible";
        if (elementValue === 0) { // Si nous sommes revenus au premier élément
            carrouselBoutonGauche.style.visibility = "hidden";
        }
        
        for (let i = 0; i < 5; i++) { // Boucle pour masquer les autres éléments (0, 1, 2)
            if (i !== elementValue) { // Si l'élément n'est pas celui que nous voulons afficher
                document.getElementById("carrousel-item-" + i).style.display = "none";
            }
        }
    }
});

// Gestionnaire d'événement pour le bouton droit du carrousel
carrouselBoutonDroite.addEventListener('click', function() {
    if (elementValue < 4) { // Vérifie si l'élément actuel n'est pas le dernier
        elementValue += 1; 
        item = "carrousel-item-" + elementValue;
        document.getElementById(item).style.display = "block";
        carrouselBoutonDroite.style.visibility = "visible";
        carrouselBoutonGauche.style.visibility = "visible";
        if (elementValue === 4) { // Si nous sommes arrivés au dernier élément
            carrouselBoutonDroite.style.visibility = "hidden";
        }
        
        for (let i = 0; i < 5; i++) { // Boucle pour masquer les autres éléments (0, 1, 2)
            if (i !== elementValue) { // Si l'élément n'est pas celui que nous voulons afficher
                document.getElementById("carrousel-item-" + i).style.display = "none";
            }
        }
    }
});