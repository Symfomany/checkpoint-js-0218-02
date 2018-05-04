const db = require(`../models/index.js`);

class ProduitsController {
  list(req, res) {
    res.render("produits/list");
  }
}
module.exports = ProduitsController;
