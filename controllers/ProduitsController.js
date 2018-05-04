const db = require(`../models/index.js`);

class ProduitsController {
  list(req, res) {
    db.Produits.findAll().then(produits => {
      res.render("produits/list", { produits: produits });
    });
  }

  create(req, res) {
    db.Produits.findAll().then(produit => {
      res.render("produits/create", {
        produit: produit
      });
    });
  }

  save(req, res) {
    if (req.files.image !== undefined) {
      console.log("je passe par le if");
      const myFile = req.files.image;
      //recuperer mes données en POST
      myFile.mv(`public/uploads/${myFile.name}`, () => {
        const datas = req.body;
        datas.image = myFile.name;
        db.Produits.create(datas).then(produit =>
          res.redirect("/produits/list")
        );
      });
    } else {
      console.log("je passe par le else");
      const datas = req.body;
      db.Produits.create(datas).then(produit => res.redirect("/produits/list"));
    }
  }

  // save(req, res) {
  //   const datas = req.body;
  //   db.Produits.create(datas).then(produit => res.redirect("/produits/list"));
  // }

  read(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      res.render("produits/read", { produit: produit });
    });
  }

  update(req, res) {
    db.Produits.findById(req.params.id).then(produit => {
      res.render("produits/update", { produit: produit });
    });
  }

  updating(req, res) {
    db.Produits.findById(req.params.id)
      .then(produit => {
        produit.update(req.body);
      })
      .then(res.redirect("/produits/list"));
  }

  delete(req, res) {
    req.flash("info", `le produit ${req.params.id} a bien été supprimé`);
    db.Produits.findById(req.params.id)
      .then(produit => {
        produit.destroy();
      })
      .then(() => {
        res.redirect("/produits/list");
      });
  }
}
module.exports = ProduitsController;
