const express = require("express");
const router = express.Router();

/**
 * Routing for Produits
 */
const ProduitsController = require("../controllers/ProduitsController");
const controller = new ProduitsController();

router.get("/liste", (req, res) => controller.liste(req, res));
router.get("/voir/:id", (req, res) => controller.voir(req, res));
router.get("/creer", (req, res) => controller.creer(req, res));
router.post("/enregistrer", (req, res) => controller.enregistrer(req, res));
router.get("/supprimer/:id", (req, res) => controller.supprimer(req, res));

module.exports = router;
