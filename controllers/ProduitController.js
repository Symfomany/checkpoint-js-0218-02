const db = require(`../models/index.js`);
/**
 * Class Produit Controller
 */
class ProduitController {
  /**
   * Produit liste
   * @param {*} req
   * @param {*} res
   */

    liste(req, res) {
        // Je recupere tous les produits 
        db.Produit.findAll().then(produits => {
          res.render("produits/liste", { produits});
        });
    }

    description(req, res) {
        db.Produit.findById(req.params.id).then(produit => {
            if (produit.enVente === 0) {
                produit.enVente = 1;
            } else {
                produit.enVente = 0;
            }
            produit.save();
        res.redirect("/produits/liste");
        });
    }

    creer(req,res) {
        res.render("produits/creer");
    }

    enregistrer(req, res) {
          db.Produit.create(req.body).then(produit =>
            res.redirect("/produits/liste")
          );
    }
    supprimer(req, res) {
        db.Produit.findById(req.params.id).then(produit => {
          produit.destroy();
        }).then(() => {
          res.redirect("/produits/liste");
        });
    }

    modifierEtat(req, res) {
        db.Produit.findById(req.params.id).then(produit => {
            if (produit.enVente === 0) {
                produit.enVente = 1;
            } else {
                produit.enVente = 0;
            }
            produit.save();
        res.redirect("/produits/liste");
        });
    }

    augmenteQ(req, res) {
        db.Produit.findById(req.params.id).then(produit => {
            const nbr = produit.quantite + 1;
          produit.update({ quantite : `${nbr}` }).then(() => {
            res.redirect("/produits/liste");
          });
        });
    }

    diminueQ(req, res) {
        db.Produit.findById(req.params.id).then(produit => {
            const nbr = produit.quantite - 1;
          produit.update({ quantite : `${nbr}` }).then(() => {
            res.redirect("/produits/liste");
          });
        });
    }
}

module.exports = ProduitController;