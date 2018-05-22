

// *Bonus: Si tu as le temps:, extraire la plus petite largeur et la plus grand longueur*


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

  ;
//1. Parmis les produits de TVA à 20%, extraire les 3 produits les plus chers afin d'en afficher leur prix TTC , 
//c'est à dire avec TVA comprise.
  let exo1 = produits.filter(x => x.taxe.tva === 20)
                      .sort((a, b) => {return a.prix - b.prix })
                      .map(i => i.prix + i.prix * i.taxe.tva / 100)
                      .slice(-3);
  console.log(exo1);
//  2. Parmis tous les produits de TVA à 20%, calculer et ajouter le volume à chaque produit de la liste ,
//  le calcul se fera par Longeur(L) x largeur(l) x Hauteur.
//  Puis calculer et afficher en console le volume total de tous les produits.
   let exo2 = produits.filter(x => x.taxe.tva === 20)
                      .map(i => i.dimension.L* i.dimension.l*i.dimension.H)
                      .reduce((a, b) => a + b, 0)
  console.log(exo2);  
  //console.log(produits[0].dimension.l);  
  let dim = []
  let tab = []
  produits.forEach(el => {  
    let x = el.dimension.l
    dim.push(x)    
    let y = el.dimension.L
    tab.push(y) 
  });
  //console.log(dim, tab);
  let larg = dim.sort((a, b) => { return b - a }).slice(-1)
  let long =  tab.sort((a, b) => { return a - b }).slice(-1)
   console.log(`largeur  = ${larg}, longeur = ${long}`);
