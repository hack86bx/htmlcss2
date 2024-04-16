/* Cette fonction va servir de déclencheur à notre transition */
/* L'état initial correspond à une classe "barre"             */
/* L'état final correspond aux classes "barre go"             */
/*                                                            */
/* Chaque fois qu'on appuie sur le bouton, on bascule d'un    */
/* état à l'autre, provoquant le lancement de la transition   */

function toggle() {
    "use strict";
    
    /* Mettre dans un tableau x, tous les éléments p qui sont dans l'élément avec id = course */
    var x = document.querySelectorAll("#course p");

    /* Pour chaque élément du tableau x, tester son attribut class */
    x.forEach(elem => {
        /* S'il a uniquement la classe "barre" */
        if (elem.className === "barre") {
            /* Alors on va ajouter la classe "go" => pour passer à "barre go" */
            elem.className += " go";
        } else {
            /* Sinon ne pas mettre la classe "go" => pour passer à "barre" */
            elem.className = "barre";
        }
    });
}
