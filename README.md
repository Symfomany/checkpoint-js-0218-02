# Checkpoint 2 - NodeJS & Express & MySQL

![enter image description here](https://cdn-images-1.medium.com/max/365/1*d2zLEjERsrs1Rzk_95QU9A.png)

## Pre-requis

* Tu as besoin de créer base de donnée Mysql (Mamp pour les Mac)

* Une fois avoir cloner ce repository, _il y a deja une architecture MVC de Express-Base_, Tu commiteras régulièrement par actions que tu fais et pushes à la fin sur ta branche _NOM_PRENOM_ (la master est verouillée)

## Conseils

* Es-tu dans le bon dossier?
* Prends ton temps, il vaut mieux en faire moins mais mieux ;)
* Développer et Deboguer avec rigueur en MVC: routing/controlers/models/vue
* La console est ton vraie amie (pas le voisin) pour avancer pas à pas.
* Tu oublieras pas d'installer les dépendances et de configurer la connexion à la base de données que tu vas créer.

## Exercice 1: BackOffice de Produits E-Commerce

_Objectif: Maitrise du routing, du model, du controlleur, des vues_

Dans le souhait de pouvoir gérer des produits e-commerce, nous allons construire pas à pas un mini back-office gestion des produit du catalogue e-commerce.

* 1.  Créer une Base de données catalogue et à l'intérieur une table produit avec 5 produits insérés au choix.

_Voici les champs de la table:_

* id
* reference (String AA-XXXX-BB)
* titre
* note (de 1 à 5)
* quantité
* image (url distante)
* descriptif
* prix (nombre décimal)
* tva (nombre décimal)
* enVente (booléen)
* createdAt
* updatedAt

Voici les fonctionnalités attendues:

_Objectif: Algorithme sur des tableaux_

1.  Lister les 5 produits sur leur id, ref, titre, note et image dans un joli tableau Bootstrap, trié par note décroissante si possible. OK
2.  Voir le détail complet d'un produit quand on clique sur son id, sa référence ou sur son titre OK
3.  Pouvoir créer un produit via un formulaire (input, textarea, liste déroulante(note) et boutons radio(en vente)) OK
4.  Pouvoir supprimer un produit de la liste OK

* Bonus: **Si tu as le temps**, on voudrait pouvoir mettre en vente ou pas un produit à l'aide d'un bouton qui bascule de Mise en Vente / Non Disponible (route en GET avec parametre) OK

* Bonus: **Si tu as le temps**, pour chaque produit, on voudrait pouvoir augmenter et diminuer la quantité pour chaque produit dans la liste. (route en GET avec parametre) OK \*

En Options:

* Messages flash
* BackOffice Responsive
* Font Awesome

## Exercice 2: Algorithme de Panier des Produits

```
const produits = [
  {titre: 'Produit 1',prix: 55.5, dimension: {L: 15, l:10, H: 5}, taxe: {tva: 20}},
  {titre: 'Produit 2',prix: 75.5, dimension: {L: 55, l:6, H: 2}, taxe: {tva: 10}},
  {titre: 'Produit 3',prix: 70.75, dimension: {L: 10, l:10, H: 4}, taxe: {tva: 15}},
  {titre: 'Produit 4',prix: 65, dimension: {L: 5, l:4, H: 6}, taxe: {tva: 20}},
  {titre: 'Produit 5',prix: 89, dimension: {L: 7, l:6, H: 3}, taxe: {tva: 20}},
  {titre: 'Produit 6',prix: 89, dimension: {L: 9, l:5, H: 20}, taxe: {tva: 20}},
  {titre: 'Produit 7',prix: 89, dimension: {L: 10, l:8, H: 10}, taxe: {tva: 20}},
  {titre: 'Produit 8',prix: 89, dimension: {L: 11, l:9, H: 8}, taxe: {tva: 20}},
  {titre: 'Produit 9',prix: 89, dimension: {L: 8, l:5, H: 6}, taxe: {tva: 10}},
  {titre: 'Produit 10',prix: 89, dimension: {L: 5, l:8, H: 4}, taxe: {tva: 20}},
];
```

1.  Parmis les produits de TVA à 20%, extraire les 3 produits les plus chers afin d'en afficher leur prix TTC , c'est à dire avec TVA comprise.

2)  Parmis tous les produits de TVA à 20%, calculer et ajouter le volume à chaque produit de la liste ,
    le calcul se fera par Longeur(L) x largeur(l) x Hauteur.
    Puis calculer et afficher en console le volume total de tous les produits.

_Bonus: Si tu as le temps:, extraire la plus petite largeur et la plus grand longueur_

A toi de jouer ! Bonne chance !

![enter image description here](https://media.giphy.com/media/l41m2M6Gwq2ogoyju/giphy.gif)
