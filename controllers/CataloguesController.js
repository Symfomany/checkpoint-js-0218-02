const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class CataloguesController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  // voir(req, res) {
  //   res.render("catalogues/voir"), { articles };
  // }

  voir(req, res) {
    //je recupere tous les articles
    db.Catalogues.findAll().then(articles => {
      res.render("catalogues/voir", {
        articles
      });
    });
  }
}
module.exports = CataloguesController;
