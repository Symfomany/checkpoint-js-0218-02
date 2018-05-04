const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ProduitsController = require("../controllers/ProduitsController");
const controller = new ProduitsController();

router.get("/", (req, res) => controller.index(req, res));
router.get("/details:id(\\d+)", (req, res) => controller.details(req, res));
router.get("/creer", (req, res) => controller.creer(req, res));
router.post("/enregistrer", (req, res) => controller.enregistrer(req, res));
router.get("/supprimer:id(\\d+)", (req, res) => controller.supprimer(req, res));

module.exports = router;
