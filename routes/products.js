const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ProductsController = require("../controllers/ProductsController");
const controller = new ProductsController();

router.get("/produit/ajouter", (req, res) =>
  controller.displayAddForm(req, res)
);
router.get("/produit/:id", (req, res) => controller.viewProduct(req, res));
router.get("/produits", (req, res) => controller.productsListing(req, res));
router.post("/produit/enregistrer", (req, res) =>
  controller.createProductEntry(req, res)
);
router.get("/produit/supprimer/:id", (req, res) =>
  controller.deleteProductEntry(req, res)
);

module.exports = router;
