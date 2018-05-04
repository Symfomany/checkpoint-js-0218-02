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
  liste(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/liste", { produits });
    });
  }
}

module.exports = ProduitsController;
