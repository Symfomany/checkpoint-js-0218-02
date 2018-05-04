/*
  ```
  
  1. Parmis les produits de TVA à 20%, 
  extraire les 3 produits les plus chers afin d'en afficher leur prix TTC , 
  c'est à dire avec TVA comprise.
  
  
   2. Parmis tous les produits de TVA à 20%, 
   calculer et ajouter le volume à chaque produit de la liste ,
  le calcul se fera par Longeur(L) x largeur(l) x Hauteur.
  Puis calculer et afficher en console le volume total de tous les produits.
   
  
  *Bonus: Si tu as le temps:, extraire la plus petite largeur et la plus grand longueur*
  */

const produits = [
  {
    titre: "Produit 1",
    prix: 55.5,
    dimension: { L: 15, l: 10, H: 5 },
    taxe: { tva: 20 }
  },
  {
    titre: "Produit 2",
    prix: 75.5,
    dimension: { L: 55, l: 6, H: 2 },
    taxe: { tva: 10 }
  },
  {
    titre: "Produit 3",
    prix: 70.75,
    dimension: { L: 10, l: 10, H: 4 },
    taxe: { tva: 15 }
  },
  {
    titre: "Produit 4",
    prix: 65,
    dimension: { L: 5, l: 4, H: 6 },
    taxe: { tva: 20 }
  },
  {
    titre: "Produit 5",
    prix: 89,
    dimension: { L: 7, l: 6, H: 3 },
    taxe: { tva: 20 }
  },
  {
    titre: "Produit 6",
    prix: 89,
    dimension: { L: 9, l: 5, H: 20 },
    taxe: { tva: 20 }
  },
  {
    titre: "Produit 7",
    prix: 89,
    dimension: { L: 10, l: 8, H: 10 },
    taxe: { tva: 20 }
  },
  {
    titre: "Produit 8",
    prix: 89,
    dimension: { L: 11, l: 9, H: 8 },
    taxe: { tva: 20 }
  },
  {
    titre: "Produit 9",
    prix: 89,
    dimension: { L: 8, l: 5, H: 6 },
    taxe: { tva: 10 }
  },
  {
    titre: "Produit 10",
    prix: 89,
    dimension: { L: 5, l: 8, H: 4 },
    taxe: { tva: 20 }
  }
];

const prixtva = produits.map(
  element => element.prix + element.prix * element.taxe.tva / 100
);
const prixmax = Math.max(...prixtva);
console.log(prixtva);
console.log(prixmax);

const minl = produits.map(element => element.dimension.l);
const minlargeur = Math.min(...minl);
const maxL = produits.map(element => element.dimension.L);
const maxlongeur = Math.max(...maxL);
//console.log(minlargeur, maxlongueur);

produits.forEach(element => element.taxe.tva === 20);
