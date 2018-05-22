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
let produitsTVA20 = produits.filter(elem => elem.taxe.tva === 20);

// ---------------------Part 1---------------------
let produitsTroisFiltrer = produitsTVA20
  .sort((a, b) => b.prix - a.prix)
  .splice(0, 3);

for (i = 0; i < produitsTroisFiltrer.length; i++) {
  produitsTroisFiltrer[i].prixTTC =
    produitsTroisFiltrer[i].prix * (1 + produitsTroisFiltrer[i].taxe.tva / 100);
}
// autre solution avec map
let jambon = produitsTroisFiltrer.map(
  elmt => elmt.prix * (1 + elmt.taxe.tva / 100)
);
console.log(`Les prix des trois objets les plus élevés sont : ${jambon}`);

console.log(
  `Les 3 objets dont le prix est le plus élevé ont pour prix TTC : ${
    produitsTroisFiltrer[0].prixTTC
  }, ${produitsTroisFiltrer[1].prixTTC}, ${produitsTroisFiltrer[2].prixTTC}`
);

// ---------------------Part 2---------------------

function ajoutVolume() {
  produitsTVA20.forEach(element => {
    element.volume =
      element.dimension.L * element.dimension.l * element.dimension.H;
  });
}

function calculVolumeTotal() {
  ajoutVolume();

  let volumeTotal = produitsTVA20.reduce((a, b) => a + b.volume, 0);

  return `le volume total est : ${volumeTotal}`;
}

console.log(calculVolumeTotal());

// ---------------------Bonus---------------------
let longueur = produitsTVA20.map(element => element.dimension.L);
console.log(longueur);
let LMax = Math.max(...longueur);

//autre solution avec reduce
let longu = produitsTVA20
  .map(element => element.dimension.L)
  .reduce((a, b) => (a > b ? a : b));
console.log(longu);

let largeur = produitsTVA20.map(element => element.dimension.L);
let lMin = Math.min(...largeur);

//autre solution avec reduce
let larg = produitsTVA20
  .map(element => element.dimension.L)
  .reduce((a, b) => (a < b ? a : b));
console.log(larg);

console.log(
  `la longueur maximum des produits à TVA= 20% est : ${LMax} et la plus petite largeur est : ${lMin}`
);

console.log(
  `la longueur maximum des produits à TVA= 20% est : ${longu} et la plus petite largeur est : ${larg}`
);
