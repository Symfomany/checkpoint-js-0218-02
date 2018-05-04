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
//   ```

//   1. Parmis les produits de TVA à 20%, extraire les 3 produits les plus chers afin d'en afficher leur prix TTC , c'est à dire avec TVA comprise.

//    2. Parmis tous les produits de TVA à 20%, calculer et ajouter le volume à chaque produit de la liste ,
//   le calcul se fera par Longeur(L) x largeur(l) x Hauteur.
//   Puis calculer et afficher en console le volume total de tous les produits.

//Retour des 3 plus chers avec de TVA 20 et ajout du prix TTC dans chacun d'entre eux
function troisPluscher(element) {
  let filtreTVAVingt = element
    .filter(x => x.taxe.tva === 20)
    .sort((a, b) => a.prix - b.prix);
  let sliceAndConvert = filtreTVAVingt
    .slice(filtreTVAVingt.length - 3)
    .map(x => {
      x.prixTTC = x.prix * (1 + x.taxe.tva / 100);
      return x;
    });
  return sliceAndConvert;
}

let test = troisPluscher(produits);
console.log(test);

// Ajout du Volume dans chaque element
function ajouterVolume(element) {
  let elementmodified = element.map(x => {
    x.volume = x.dimension.l * x.dimension.L * x.dimension.H;
    return x;
  });
  return elementmodified;
}
let test2 = ajouterVolume(produits);
console.log(test2);

// Calcul du volume Total
let volumeTotal = 0;
for (const element of test2) {
  volumeTotal += element.volume;
}
console.log(volumeTotal);

let plusPetiteLargeur = produits.sort((a, b) => a.dimension.l - b.dimension.l);
console.log(plusPetiteLargeur[0].dimension.l);

let plusGrandeLongueur = produits.sort((a, b) => b.dimension.L - a.dimension.L);
console.log(plusGrandeLongueur[0].dimension.L);
