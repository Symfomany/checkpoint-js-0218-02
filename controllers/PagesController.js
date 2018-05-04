const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class PagesController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  homeListing(req, res) {
    db.Products.findAll({ order: sequelize.col("score") }).then(products => {
      //  ... sending to the view
      res.render("index", {
        // we send the results
        products
      });
    });
  }
  about(req, res) {
    res.render("pages/about");
  }
}

module.exports = PagesController;
