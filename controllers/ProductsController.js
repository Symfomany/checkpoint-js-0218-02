const db = require(`../models/index.js`);
const sequelize = require(`sequelize`);

class ProductsController {
  productsListing(req, res) {
    db.Products.findAll({ order: sequelize.literal("(score) DESC") }).then(
      products => {
        //  ... sending to the view
        res.render("pages/products", {
          // we send the results
          products
        });
      }
    );
  }
}

module.exports = ProductsController;
