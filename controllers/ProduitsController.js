const db = require(`../models/index.js`);

class ProduitsController {
  list(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/list", { produits: produits });
    });
  }
}
module.exports = ProduitsController;
