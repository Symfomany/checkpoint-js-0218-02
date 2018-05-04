const db = require(`../models/index.js`);
/**
 * Class Produits Controller
 */
class ProduitsController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  liste(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/liste", { produits });
    });
  }

  voir(req, res) {
    db.Produits.findById(req.params.id).then(produits =>
      res.render("produits/voir", { produits })
    );
  }

  creer(req, res) {
    db.Produits.findAll().then(produits =>
      res.render("produits/creer", { produits })
    );
  }

  enregistrer(req, res) {
    const monFichier = req.files.image;
    const datas = req.body;
    if (monFichier) {
      const { image } = req.files;
      monFichier.mv(`public/upload/${monFichier.name}`, () => {
        datas.image = monFichier.name;

        db.Produits.create(datas).then(produits =>
          res.redirect("/produits/liste")
        );
      });
    } else {
      db.Produits.create(datas).then(produits =>
        res.redirect("/produits/liste")
      );
    }
  }
  supprimer(req, res) {
    db.Produits.findById(req.params.id).then(produits => {
      produits.destroy().then(produits => {
        res.redirect("/produits/liste");
      });
    });
  }
}

module.exports = ProduitsController;
