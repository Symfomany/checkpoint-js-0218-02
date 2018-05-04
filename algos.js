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

// Parmis les produits de TVA à 20%, extraire les 3 produits les plus chers afin d'en afficher leur prix TTC , c'est à dire avec TVA comprise.
const mostExpensive3fromTVA20 = produits
  .filter(item => item.taxe.tva === 20)
  .map(item => {
    item.prixTTC = item.prix * (1 + item.taxe.tva / 100);
    return item;
  })
  .sort((a, b) => a.prixTTC < b.prixTTC)
  .splice(0, 3);

console.log("3 Produits les plus chers parmis ceux qui ont une TVA à 20%:");
console.log(mostExpensive3fromTVA20);
console.log();

// Parmis tous les produits de TVA à 20%, calculer et ajouter le volume à chaque produit de la liste , le calcul se fera par Longeur(L) x largeur(l) x Hauteur. Puis calculer et afficher en console le volume total de tous les produits.
const totalVolume = produits
  .filter(item => item.taxe.tva === 20)
  .map(item => {
    item.volume = item.dimension.L * item.dimension.l * item.dimension.H;
    return item;
  })
  .reduce((acc, current) => acc + current.volume, 0);

console.log(
  "Calculer le volume de chaque produits et retourner la somme totale de tous les produits combinés:"
);
console.log(totalVolume);
console.log();

// Plus petite largeur:
const smallest = Math.min(...produits.map(item => item.dimension.l));

console.log("Plus petite largeur:");
console.log(smallest);
console.log();

// Plus grande longueur:
const longest = Math.max(...produits.map(item => item.dimension.L));

console.log("Plus grande longueur:");
console.log(longest);
console.log();
