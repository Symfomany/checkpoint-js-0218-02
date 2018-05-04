const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class ProduitsController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  index(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/index", { produits });
    });
  }

  details(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      res.render("produits/details", { produit });
    });
  }

  creer(req, res) {
    res.render("produits/creer");
  }

  enregistrer(req, res) {
    const monFichier = req.files.image;
    const datas = req.body;
    if (req.body.enVente === undefined) {
      req.body.enVente = 0;
    }
    if (req.files.image !== undefined) {
      monFichier.mv(`public/uploads/${monFichier.name}`, () => {
        datas.image = monFichier.name;
        db.Produits.create(datas).then(() => res.redirect("/produits/"));
      });
    } else {
      datas.image = `https://media.giphy.com/media/13XfETre3zugg0/giphy.gif`;
      db.Produits.create(datas).then(() => res.redirect("/produits/"));
    }
  }

  supprimer(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      produit.destroy().then(() => {
        req.flash("info", `Le produit #${req.params.id} a bien été supprimé`);
        res.redirect("/produits/");
      });
    });
  }
}

module.exports = ProduitsController;
