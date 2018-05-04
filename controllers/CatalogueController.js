const db = require(`../models/index.js`);

class CatalogueController {
  /**
   * Pages Lister les articles
   * @param {*} req
   * @param {*} res
   */
  liste(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/liste", {
        produits
      });
    });
  }
}
module.exports = CatalogueController;
