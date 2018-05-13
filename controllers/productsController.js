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
    db.produits.findAll({ order: [["note", "DESC"]] }).then(results => {
      res.render("products/liste", { results: results });
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
    console.log(req.body);
    db.produits.create(req.body).then(prod => {
      console.log(prod);
      res.redirect("/products/liste");
    });
  }
  suppress(req, res) {
    db.produits.findById(req.params.id).then(produit => {
      produit.destroy().then(() => {
        res.redirect("/products/liste");
      });
    });
  }
  augmenter(req, res) {
    db.produits.findById(req.params.id).then(result => {
      result.Quantite += 1;
      result.save();
      res.redirect(`/products/voir/${req.params.id}`);
    });
  }
  diminuer(req, res) {
    db.produits.findById(req.params.id).then(result => {
      result.Quantite -= 1;
      result.save();
      res.redirect(`/products/voir/${req.params.id}`);
    });
  }
  activer(req, res) {
    db.produits.findById(req.params.id).then(result => {
      result.En_vente ^= 1;
      result.save();
      res.redirect("/products/voir/");
    });
  }
}

module.exports = productsController;
