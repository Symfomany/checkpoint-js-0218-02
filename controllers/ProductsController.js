const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class ProductsController {
  productsListing(req, res) {
    db.Products.findAll().then(products => {
      //  ... sending to the view
      res.render("pages/products", {
        // we send the results
        products
      });
    });
  }
}

module.exports = ProductsController;
