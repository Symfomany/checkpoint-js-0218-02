const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class productsController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  showProducts(req, res) {
    db.produits.findAll({ order: [["Note", "DESC"]] }).then(results => {
      res.render("products/liste", { results });
    });
  }
  detail(req, res) {
    db.produits.findById(req.params.id).then(result => {
      res.render("products/voir", { result });
    });
  }

  create(req, res) {
    res.render("products/creation");
  }

  createProduct(req, res) {
    db.produits
      .create(req.body)
      .then(produit => res.redirect("/products/liste"));
  }
  suppress(req, res) {
    db.produits.findById(req.params.id).then(produit => {
      produit.destroy().then(() => {
        res.redirect("/products/liste");
      });
    });
  }
}

module.exports = productsController;
