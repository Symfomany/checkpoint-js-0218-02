const db = require(`../models/index.js`);
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
        db.produits.findAll().then(products => res.json(products));
    }
}

module.exports = ProductsController;