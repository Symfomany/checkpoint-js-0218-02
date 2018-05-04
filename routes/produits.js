const express = require("express");
const router = express.Router();

/**
 * Routing for Produit
 */
const ProduitController = require("../controllers/ProduitController");
const controller = new ProduitController();


router.get("/liste", (req, res) => controller.liste(req, res));
router.get("/description/:id", (req, res) => controller.description(req, res));
router.get("/creer/", (req, res) => controller.creer(req, res));
router.post("/enregistrer/", (req, res) => controller.enregistrer(req, res));
router.get("/supprimer/:id", (req, res) => controller.supprimer(req, res));
router.get("/modifierEtat/:id", (req, res) => controller.modifierEtat(req, res));
router.get("/augmenteQ/:id", (req, res) => controller.augmenteQ(req, res));
router.get("/diminueQ/:id", (req, res) => controller.diminueQ(req, res));



module.exports = router;