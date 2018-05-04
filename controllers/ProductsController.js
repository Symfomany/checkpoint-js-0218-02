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
  createProductEntry(req, res) {
    db.Products.create(req.body).then(articles =>
      res.redirect("/admin/produits")
    );
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
    db.Products.create(req.body).then(produit =>
      res.redirect(`/produits/${req.body.id}`)
    );
  }

  deleteProductEntry(req, res) {
    db.Products.findById(req.params.id).then(product => {
      product.destroy().then(() => {
        res.redirect("/admin/produits");
      });
    });
  }
}

module.exports = ProductsController;
