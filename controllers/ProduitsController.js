const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class ProduitsController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  index(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/index", { produits });
    });
  }

  details(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      res.render("produits/details", { produit });
    });
  }

  creer(req, res) {
    res.render("produits/creer");
  }
}

module.exports = ProduitsController;
