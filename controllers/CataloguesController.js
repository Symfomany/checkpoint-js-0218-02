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

  detailler(req, res) {
    db.Catalogues.findById(req.params.id).then(produit => {
      res.render("catalogues/detailler", { produit });
    });
  }

  creer(req, res) {
    res.render("catalogues/creer"), { articles };
  }

  enregistrer(req, res) {
    if (req.body.enVente == undefined) {
      req.body.enVente = "0";
    }

    // console.log(req.body);
    db.Catalogues.create(datasCatalogues).then(produit => {
      res.redirect("catalogues/voir");
    });
  }

  supprimer(req, res) {
    db.Catalogues.findById(req.params.id).then(article => {
      article.destroy();
      res.redirect("/categories/liste");
    });
  }
}
module.exports = CataloguesController;
