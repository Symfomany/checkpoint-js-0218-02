const db = require(`../models/index.js`);

class CategoriesController {
  liste(req, res) {
    // je recupere mes Categories
    db.Categories.findAll().then(categories => {
      // puis je les envois à la vue
      res.render("categories/liste", {
        categories
      });
    });
  }
}

module.exports = CategoriesController;
