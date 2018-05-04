const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class PagesController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  about(req, res) {
    res.render("pages/about");
  }
  produits(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("pages/produits", {
        produits
      });
    });
  }
}

module.exports = PagesController;
