const produits = [
    {
        titre: 'Produit 1',
        prix: 55.5,
        dimension: {
            L: 15,
            l: 10,
            H: 5
        },
        taxe: {
            tva: 20
        }
    }, {
        titre: 'Produit 2',
        prix: 75.5,
        dimension: {
            L: 55,
            l: 6,
            H: 2
        },
        taxe: {
            tva: 10
        }
    }, {
        titre: 'Produit 3',
        prix: 70.75,
        dimension: {
            L: 10,
            l: 10,
            H: 4
        },
        taxe: {
            tva: 15
        }
    }, {
        titre: 'Produit 4',
        prix: 65,
        dimension: {
            L: 5,
            l: 4,
            H: 6
        },
        taxe: {
            tva: 20
        }
    }, {
        titre: 'Produit 5',
        prix: 89,
        dimension: {
            L: 7,
            l: 6,
            H: 3
        },
        taxe: {
            tva: 20
        }
    }, {
        titre: 'Produit 6',
        prix: 89,
        dimension: {
            L: 9,
            l: 5,
            H: 20
        },
        taxe: {
            tva: 20
        }
    }, {
        titre: 'Produit 7',
        prix: 89,
        dimension: {
            L: 10,
            l: 8,
            H: 10
        },
        taxe: {
            tva: 20
        }
    }, {
        titre: 'Produit 8',
        prix: 89,
        dimension: {
            L: 11,
            l: 9,
            H: 8
        },
        taxe: {
            tva: 20
        }
    }, {
        titre: 'Produit 9',
        prix: 89,
        dimension: {
            L: 8,
            l: 5,
            H: 6
        },
        taxe: {
            tva: 10
        }
    }, {
        titre: 'Produit 10',
        prix: 89,
        dimension: {
            L: 5,
            l: 8,
            H: 4
        },
        taxe: {
            tva: 20
        }
    }
];

/**
 * les fonction DEUX et Bonus ne sont pas fonctionnelles
 * problème avec un reduce (l'index 0 n'est pas impacté par le reduce)(deux())
 * problème avec un map (retourne bien tout les éléments mais dans un tableau de tableau)(deuxbis())
 * problème avec un map(impossible d'extraire des sous tableaux les valeurs...)(bonus())
 */

function une() {
    const array = produits.filter((elt, i, arr) => elt.taxe.tva >= 20)
    return array.map(elt => elt.prix * ((elt.taxe.tva / 100) + 1)).sort((a, b) => a - b).slice(array.length - 3)
}
// console.log(une());
function deux() {
    const array = produits.filter((elt, i, arr) => elt.taxe.tva >= 20)
    return array.reduce((acc, elt, i, arr) => {
        elt.volume = elt.dimension.L * elt.dimension.l * elt.dimension.H;
        return arr
    })
}
function deuxbis() {
    const array = produits.filter((elt, i, arr) => elt.taxe.tva >= 20)
    return array.map((elt, i, arr) => {
        elt.volume = elt.dimension.L * elt.dimension.l * elt.dimension.H;
        return arr
    })
}
// console.log(deux()); console.log(deuxbis())

function bonus() {
    const array = produits.map(elt => Object.values(elt.dimension).slice(0, 2))
    return array.map(elt => elt.map(elt => elt[]))
}
console.log(bonus());