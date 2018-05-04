const db = require(`../models/index.js`);
const sequelize = require(`sequelize`);

class ProductsController {
  viewProduct(req, res) {
    console.log("fonction view");
    db.Products.findById(req.params.id).then(product => {
      //  ... sending to the view
      res.render("pages/product", {
        // we send the results
        product
      });
    });
  }
  displayAddForm(req, res) {
    //console.log("ok");
    res.render("pages/formCreateProduct");
  }
  productsListing(req, res) {
    console.log("fonction listing");
    db.Products.findAll({ order: sequelize.literal("(score) DESC") }).then(
      products => {
        res.render("pages/products", { products });
      }
    );
  }
  saveProduct(req, res) {
    db.Articles.create(req.body).then(produit =>
      res.redirect(`/produits/${req.body.id}`)
    );
  }
}

module.exports = ProductsController;
