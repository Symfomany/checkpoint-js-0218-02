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
  liste(req, res) {
    db
      .Products
      .findAll()
      .then(products => res.render("liste", {products}))
  }
  newproduct(req, res) {
    res.render("newproduct")
  }
  addproduct(req, res) {
    db
      .Products
      .create(req.body)
      .then(() => res.redirect("/liste"))
  }
  desactiver(req, res) {
    db
      .Products
      .findById(req.params.id)
      .then(product => product.update({enVente: 1}))
      .then(() => res.redirect("/liste"))
  }
  activer(req, res) {
    db
      .Products
      .findById(req.params.id)
      .then(product => product.update({enVente: 0}))
      .then(() => res.redirect("/liste"))
  }
  supprimer(req, res) {
    db
      .Products
      .findById(req.params.id)
      .then(product => product.destroy())
      .then(() => res.redirect("/liste"))
  }
  augmenterquantite(req, res) {
    db
      .Products
      .findById(req.params.id)
      .then(product => product.update({
        quantity: product.quantity + 1
      }))
      .then(() => res.redirect("/liste"))
  }
  diminuerquantite(req, res) {
    db
      .Products
      .findById(req.params.id)
      .then(product => product.update({
        quantity: product.quantity - 1
      }))
      .then(() => res.redirect("/liste"))
  }
  voir(req, res) {
    db
      .Products
      .findById(req.params.id)
      .then(product => res.render("voir", {product}))
  }
}

module.exports = PagesController;
