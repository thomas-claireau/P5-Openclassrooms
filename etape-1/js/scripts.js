'use strict';

document.addEventListener('DOMContentLoaded', function (e) {

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
        let choice = Number(prompt("Que voulez-vous faire ? \n1 : Générer une citation \n0 : Arrêt du programme"));

        while ((choice === 0) || (choice === 1)) {
            if (choice === 0) {
                console.log("Arrêt du générateur de citation \nA bientôt !");
                return;
            }

            if (choice === 1) {
                getRandomQuotes(data.quoteParts);
                choice = Number(prompt("Voulez-vous recommencer ? \n1 : Générer une citation \n0 : Arrêt du programme"));
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