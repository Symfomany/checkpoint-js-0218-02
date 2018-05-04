const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ProductsController = require("../controllers/ProductsController");
const controller = new ProductsController();

router.get("/produits", (req, res) => controller.productsListing(req, res));
router.get("/produit/:id", (req, res) => controller.viewProduct(req, res));

// /**
//  * Middleware vérifier si je suis connecté
//  */
// function loggedIn(req, res, next) {
//   if (req.user) {
//     // si l'utilisateur est connecté
//     // if request contains the user
//     next(); // call next
//   } else {
//     return res.redirect("/auth/login"); // throwing unauthorized
//   }
// }

// function isAnonymous(req, res, next) {
//   if (!req.user) {
//     // if request contains the user
//     next(); // call next
//   } else {
//     return res.redirect("/private"); // throwing unauthorized
//   }
// }
// router.get("/private", loggedIn, (req, res) => controller.private(req, res));

module.exports = router;
