'use strict';

document.addEventListener('DOMContentLoaded', function(e) {

    const data = {
        quoteParts: [
            [
                "le martyre",
                "un amour",
                "les marques d'estime",
                "la ménopause",
                "le travail",
                "le tennis",
                "un appartement",
                "une maison",
                "un homme politique",
                "la fête des mères"
            ],
            [
                "est le seul moyen",
                "campe rarement sur ses positions",
                "est seulement possible",
                "est plus que rare",
                "est comme une promesse",
                "est comme un cerf-volant",
                "est un prétexte",
                "est comme la fête des pères",
                "est la seule fête",
                "ne comprend pas"
            ],
            [
                "si les choses vont mals",
                "si tu ne comprend pas",
                "quand tout n'est pas clair",
                "lorsque que tu ne comprend pas",
                "si elle tient de nos vingt ans",
                "si le problème est un vrai probleme",
                "quand tu sais t'appuyer sur les bonnes raisons",
                "mais sans coeur",
                "si elle se tait",
                "quand tout va bien"
            ]
        ]
    }

    const data2 = {
        quoteParts: [
            [
                "un chat",
                "un canapé",
                "la vie",
                "une fourchette",
                "un magasin",
                "une entreprise",
                "un sac",
                "le téléphone",
                "un copain",
                "une amie"
            ],
            [
                "a plus de chance d'arriver",
                "est plus sérieux",
                "ne comprend pas",
                "est bien d'accord",
                "est rarement possible",
                "est similaire a une promesse",
                "est comme un pretexte",
                "est similaire à la fete des meres",
                "est comme noel",
                "est parfois correct",
            ],
            [
                "si les choses vont mals",
                "si tu ne comprend pas",
                "quand tout n'est pas clair",
                "lorsque que tu ne comprend pas",
                "si elle tient de nos vingt ans",
                "si le problème est un vrai probleme",
                "quand tu sais t'appuyer sur les bonnes raisons",
                "mais sans coeur",
                "si elle se tait",
                "quand tout va bien",
            ]
        ]
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function getCapitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getRandomQuotes(quotesList) {
        let quotes = "";
        const lengthQuoteList = quotesList.length;
        let randomInt = [];
        const space = " ";
        const end = ".";

        for (let i = 0; i < lengthQuoteList; i++) {
            randomInt[i] = getRandomInt(quotesList[i].length);

            if (i === 0) {
                quotes = getCapitalizeFirstLetter(quotesList[i][randomInt[i]]) + space;
            } else if (i === lengthQuoteList - 1) {
                quotes += quotesList[i][randomInt[i]] + end;
            } else {
                quotes += quotesList[i][randomInt[i]] + space;
            }
        }
        console.log(quotes);
    }


    function startGenerator() {
        let choice = Number(prompt("Choix du générateur de citation : \n1 : Générateur n°1 \n2 : Générateur n°2 \n0 : Arrêt du programme"));
        let choiceNumberQuotes;
    
        while ((choice === 0) || (choice === 1) || (choice === 2)) {
            if (choice === 0) {
                console.log("Arrêt du générateur de citation \nA bientôt !");
                return;
            }
    
            if (choice === 1) {
                choiceNumberQuotes = Number(prompt("Choisissez le nombre de citations (entre 1 et 5)"));

                if ((choiceNumberQuotes > 0) && (choiceNumberQuotes <= 5)) {
                    for (let i = 0; i < choiceNumberQuotes; i++) {
                        getRandomQuotes(data.quoteParts);
                    }

                    choice = Number(prompt("Voulez-vous recommencer ? \n1 : Générateur n°1 \n2 : Générateur n°2 \n0 : Arrêt du programme"));
                } else {
                    choice = Number(prompt("Le nombre de citations générées doit être compris entre 1 et 5, voulez-vous recommencer ? \n1 : Générateur n°1 \n2 : Générateur n°2 \n0 : Arrêt du programme"));
                }
            }
    
            if (choice === 2) {
                choiceNumberQuotes = Number(prompt("Choisissez le nombre de citations (entre 1 et 5)"));

                if ((choiceNumberQuotes > 0) && (choiceNumberQuotes <= 5)) {
                    for (let i = 0; i < choiceNumberQuotes; i++) {
                        getRandomQuotes(data2.quoteParts);
                    }

                    choice = Number(prompt("Voulez-vous recommencer ? \n1 : Générateur n°1 \n2 : Générateur n°2 \n0 : Arrêt du programme"));
                } else {
                    choice = Number(prompt("Le nombre de citations générées doit être compris entre 1 et 5, voulez-vous recommencer ? \n1 : Générateur n°1 \n2 : Générateur n°2 \n0 : Arrêt du programme"));
                }
            }
        }

        if (isNaN(choice)) {
            console.log("Ce n'est pas un chiffre");
            startGenerator();
        } else {
            console.log("nombre incorrect");
            startGenerator();
        }
    }

    startGenerator();
});
