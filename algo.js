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
let final = produits.filter(x => x.taxe.tva === 20).sort(function(a, b) { return b.prix - a.prix;}).slice(0,3).map(x => `${x.titre} : ${x.prix + (x.prix * 20 /100)}`);
console.log(final)