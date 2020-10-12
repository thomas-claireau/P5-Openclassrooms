# P5-Openclassrooms - Imaginez un générateur de citations

## Brief du projet

Vous venez de découvrir JavaScript ? Très bien ! Mais vous ne deviendrez développeur JavaScript, et donc développeur frontend, que si vous pratiquez à l'aide de projets concrets.

Ce premier projet a été spécialement conçu pour ceux qui débutent dans la programmation JavaScript et qui n'ont pas l'habitude de développer des algorithmes. Votre objectif sera à la fois simple et amusant : vous allez construire un générateur de citations ! Les citations seront construites aléatoirement en assemblant des morceaux de phrase.

### Etape 1 : des citations aléatoires

Le saviez-vous ? Il existe des générateurs de texte en ligne. Tapez "générateur de citation" et vous trouverez de nombreux sites qui génèrent aléatoirement des citations en assemblant des bouts de phrase.

Vous avez le Pipotron et même le... Vandammotron. A votre tour d'en créer un ! 

Vous devez respecter les consignes suivantes :

* Les citations sont générées aléatoirement une par une à chaque appel du programme JavaScript
* Chaque citation est la combinaison d'au moins 3 morceaux de phrases (à vous de préparer ces morceaux de phrase)
* A défaut d'être intelligible, la phrase doit être cohérente (pas de point d'exclamation au milieu d'une phrase)

Le programme peut simplement afficher le résultat dans la console JavaScript.

### Etape 2 : des citations configurables

Vous souhaitez maintenant aller plus loin et proposer les options suivantes :

* Choisir le nombre de citations générées (de 1 à 5)
* Choisir entre 2 types de générateurs de citations (vous devrez donc avoir 2 ensembles de phrases)
* Une fois les citations générées, proposer de générer de nouvelles citations ou d'arrêter là le programme

Adaptez le programme pour qu'il puisse offrir ces fonctionnalités. A vous de jouer !

### ✔️ Projet validé

PRESENTATION:

Bonne présentation qui montre les détails du code
TECHNIQUE:

Bonne séparation du code en fonction
Certains éléments du code auraient pu être optimisés (une répétition de code qui aurait pu être facilement évitée, construction de la phrase avec des "if"/"else if", phrases dans un objet "data" non utile), mais cela viendra avec l'expérience
GENERALE:

Le projet fonctionne, même si quelques optimisations n'ont pas étés pensé.
Il aurait été plus agréable pour l'utilisateur d'avoir une interface - simple - pour sélectionner les options que des "prompts" un peu polluants visuellement, mais cela est en dehors de la demande de l"énoncé, et donc non pris en compte dans la décision.

NOTE:

J'ai pensé a demander à l'étudiant de faire certaines améliorations du code, mais nous les avons finalement fait en 5 minutes lors du débriefing. Les changements faits ont été :

Eviter le doublon de la fonction "startGenerator"
Utilisation de "join" pour la génération de la phrase
La variable "randomInt" n'est pas un tableau, et est déclarée dans la boucle "for"
