const db = require(`../models/index.js`);
const Sequelize = require("sequelize");
/**
 * Class Products controller
 */
class ProductsController {
    /**
     * Page about
     * @param {*} req
     * @param {*} res
     */
    show(req, res) {
        db.produits.findAll({ order: [Sequelize.literal('note DESC')]}).then(products => res.render("products/productTable",{products}));
    }

    showOne(req,res){
        db.produits.findById(req.params.id).then(product => res.render("products/showOne", {product}))
    }
    create(req,res){
        res.render("products/editProduct");
    }
    createProduct(req, res) {
        db.produits.create(req.body).then(product => res.redirect("/catalogue"));
    }
    delete(req, res) {
        db.produits.findById(req.params.id).then(product => {
            product.destroy();
            res.redirect("/catalogue")
        });
    }
    actif(req, res) {
        db.produits.findById(req.params.id).then(product => {
            product.enVente ^= true;
            product.save();
            res.redirect("/catalogue");
        })
    }
}

module.exports = ProductsController;