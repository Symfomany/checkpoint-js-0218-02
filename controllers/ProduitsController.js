const db = require(`../models/index.js`);
/**
 * Class Produit Controller
 */
class ProduitsController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */

  voir(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      res.render("produits/voir", { produit });
    });
  }

  creer(req, res) {
    res.render("produits/creer");
  }

  enregistrer(req, res) {}

  supprimer(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      produit.destroy({ force: true });
      res.redirect("/produits");
    });
  }
}

module.exports = ProduitsController;
