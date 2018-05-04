const db = require(`../models/index.js`);

class ProduitsController {
  liste(req, res) {
    // je recupere mes Produits
    db.Produits.findAll().then(produits => {
      // puis je les envois à la vue
      res.render("produits/liste", {
        produits
      });
    });
  }
}

module.exports = ProduitsController;
