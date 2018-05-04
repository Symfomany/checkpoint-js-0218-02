const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const PagesController = require("../controllers/PagesController");
const controller = new PagesController();

router.get("/about", (req, res) => controller.about(req, res));

/**
 * Middleware vérifier si je suis connecté
 */
function loggedIn(req, res, next) {
    if (req.user) {
        // si l'utilisateur est connecté if request contains the user
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
router.get("/liste", (req, res) => controller.liste(req, res))
router.get("/voir/:id", (req, res) => controller.voir(req, res))
//creation de produits
router.get("/newproduct", (req, res) => controller.newproduct(req, res))
router.post("/newproduct", (req, res) => controller.addproduct(req, res))
//desactivation produit
router.get("/desactiver/:id", (req, res) => controller.desactiver(req, res))
//activer un produit
router.get("/activer/:id", (req, res) => controller.activer(req, res))
//suppression d'un produit
router.get("/supprimer/:id", (req, res) => controller.supprimer(req, res))
//modification d'un produit
router.get("/modifier/:id", (req, res) => controller.modifier(req, res))
//augmentation diminution de quantité
router.get("/augmenterquantite/:id", (req, res) => controller.augmenterquantite(req, res))
router.get("/diminuerquantite/:id", (req, res) => controller.diminuerquantite(req, res))

module.exports = router;