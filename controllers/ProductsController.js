const db = require(`../models/index.js`);
const sequelize = require(`sequelize`);

class ProductsController {
  viewProduct(req, res) {
    db.Products.findById(req.params.id).then(product => {
      //  ... sending to the view
      res.render("pages/product", {
        // we send the results
        product
      });
    });
  }
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
