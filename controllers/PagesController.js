const db = require(`../models/index.js`);
class PagesController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  about(req, res) {
    res.render("pages/about");
  }

  articles(req, res) {
    db.Articles.findAll().then(articles => {
      res.render("pages/articles", {
        articles
      });
    });
  }
}

module.exports = PagesController;
