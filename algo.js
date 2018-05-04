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
// 1. Parmis les produits de TVA à 20%, extraire les 3 produits les plus chers afin d'en afficher leur prix TTC , c'est à dire avec TVA comprise.

function tri(item) {
  const myArray = [];
  const resultat = [];
  item.forEach(element => {
    const tva = element.taxe.tva;
    if (tva === 20) {
      myArray.push(element);
    }
  });
  myArray.sort(function(a, b) {
    return b.prix - a.prix;
  });
  const ttcZero =
    myArray[0].prix * (myArray[0].taxe.tva / 100) + myArray[0].prix;
  myArray[0].prix = ttcZero;
  const ttcOne =
    myArray[1].prix * (myArray[1].taxe.tva / 100) + myArray[1].prix;
  myArray[1].prix = ttcOne;
  const ttcTwo =
    myArray[2].prix * (myArray[2].taxe.tva / 100) + myArray[2].prix;
  myArray[2].prix = ttcTwo;
  resultat.push(myArray[0], myArray[1], myArray[2]);
  return resultat;
}
const exo1 = tri(produits);
console.log("===============EXERCICE 1=====================");
console.log(exo1);
console.log("==============================================");

//  2. Parmis tous les produits de TVA à 20%, calculer et ajouter le volume à chaque produit de la liste ,
// le calcul se fera par Longeur(L) x largeur(l) x Hauteur.
// Puis calculer et afficher en console le volume total de tous les produits.

function volume(item) {
  const myArray = [];
  const tableauVolume = [];
  item.forEach(element => {
    const tva = element.taxe.tva;
    if (tva === 20) {
      myArray.push(element);
    }
  });
  myArray.forEach(element => {
    const longeur = element.dimension.L;
    const largeur = element.dimension.l;
    const hauteur = element.dimension.H;
    const volume = longeur * largeur * hauteur;
    element.volume = volume;
  });
  myArray.forEach(element => {
    let total = element.volume;
    tableauVolume.push(total);
  });

  const resultat = tableauVolume.reduce((a, b) => a + b, 0);
  return resultat;
}

const exo2 = volume(produits);
console.log("===============EXERCICE 2=====================");
console.log(`Volume total : ${exo2}`);
console.log("==============================================");
