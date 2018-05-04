const db = require(`../models/index.js`);

class ArticlesController {
  /**
   * pages Lister les articles
   * @param {*}req
   * @param {*}res
   */

  liste(req, res) {
    db.Articles.findAll().then(articles => {
      res.render("articles/liste", {
        articles
      });
    });
  }

  voir(req, res) {
    db.Articles.findById(req.params.id).then(article => {
      res.render("articles/voir/:id");
    });
  }

  ajouter(req, res) {
    res.render("articles/ajouter");
  }

  enr(req, res) {
    const myFile = req.files.photo;
    console.log(req.files);
    myFile.mv(`public/uploads/${myFile.name}`, () => {
      let datas = req.body;
      datas.photo = myFile.name;

      db.Articles.create(datas).then(article =>
        res.redirect("/articles/liste")
      );
    });
  }

  supp(req, res) {
    db.Articles.findById(req.params.id).then(article => {
      article.destroy().then(article => {
        res.redirect("/articles/liste");
      });
    });
  }
}

module.exports = ArticlesController;
