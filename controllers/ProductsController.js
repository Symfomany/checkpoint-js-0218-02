const db = require(`../models/index.js`);

/**
 * Class Products Controller
 */
class ProductsController {
  /**
   * listing products in catalogue
   * @param {*} req
   * @param {*} res
   */
  listing(req, res) {
    db.Products.findAll({ order: [["note", "DESC"]] }).then(products => {
      res.render("products/listing", { products });
    });
  }

  /**
   * Show a single product
   * @param {*} req
   * @param {*} res
   */
  read(req, res) {
    db.Products.findById(req.params.id).then(product => {
      res.render("products/read", { product });
    });
  }

  /**
   * Show the form to create a new product
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    res.render("products/create");
  }

  /**
   * Mise à jour d'un produit
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    db.Products.findById(req.params.id).then(product => {
      res.render("products/update", { product });
    });
  }

  /**
   * Suppression d'un produit
   * @param {*} req
   * @param {*} res
   */
  delete(req, res) {
    db.Products.findById(req.params.id).then(product => {
      product.destroy().then(() => res.redirect("/products"));
    });
  }

  // POST process

  /**
   * Process qui enregistre les données de la creation d'un produit dans la base de donnée
   * @param {*} req
   * @param {*} res
   */
  creating(req, res) {
    db.Products.create(req.body)
      .then(product => res.redirect("/products"))
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  }

  // COMING SOON
  updating(req, res) {}

  // Other actions

  /**
   * Toggle Actif/inactif pour un produit donné.
   * @param {*} req
   * @param {*} res
   */
  toggleActive(req, res) {
    db.Products.findById(req.params.id).then(product => {
      product.enVente ^= true;
      product.save();

      res.redirect("/products");
    });
  }

  /**
   * Ajouter quantité d'un produit
   * @param {*} req
   * @param {*} res
   */
  quantityAdd(req, res) {
    db.Products.findById(req.params.id).then(product => {
      product.quantite += 1;
      product.save();

      res.redirect("/products");
    });
  }

  /**
   * Diminue quantité d'im produit
   * @param {*} req
   * @param {*} res
   */
  quantityRemove(req, res) {
    db.Products.findById(req.params.id).then(product => {
      if (product.quantite > 0) {
        product.quantite -= 1;
      }
      product.save();

      res.redirect("/products");
    });
  }
}

module.exports = ProductsController;
