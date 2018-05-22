const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const PagesController = require("../controllers/PagesController");
const controller = new PagesController();

router.get("/", (req, res) => controller.about(req, res));
router.get("/voir/:id", (req, res) => controller.voir(req, res));
router.get("/supprimer:id", (req, res) => controller.supprimer(req, res));
router.get("/creer", (req, res) => controller.creer(req, res));
router.post("/enregistrer", (req, res) => controller.enregistrer(req, res));


/**
 * Middleware vérifier si je suis connecté
 */
function loggedIn(req, res, next) {
  if (req.user) {
    // si l'utilisateur est connecté
    // if request contains the user
    next(); // call next
  } else {
    return res.redirect("/auth/login"); // throwing unauthorized
  }
}

function isAnonymous(req, res, next) {
  if (!req.user) {
    // if request contains the user
    next(); // call next
  } else {
    return res.redirect("/private"); // throwing unauthorized
  }
}
router.get("/private", loggedIn, (req, res) => controller.private(req, res));

module.exports = router;
