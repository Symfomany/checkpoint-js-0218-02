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
  about(req, res) {
    db.produit.findAll().then(produits => {
      res.render("pages/about", { produits });

    })
  }

  voir(req, res) {
    db.produit.findById(req.params.id).then(produits => {
      res.render("pages/voir", { produits });
    });
  }

  creer(req, res) {
    res.render("pages/creer");
  }

  enregistrer(req, res) {
    // recuperer mes donnees en POST
    console.log(req.body);
    db.produit.create(req.body).then(produits =>
      res.redirect("/")
    );
  }

  supprimer(req, res) {
    db.produit.findById(req.params.id).then(produits => {
      produits.destroy().then(() => {
        res.redirect("/"), { produits }
      })

    });
  }
}

module.exports = PagesController;
