const express = require("express");
const router = express.Router();

/**
 * Routing for Catalogues
 */
const CataloguesController = require("../controllers/CataloguesController");
const controller = new CataloguesController();

router.get("/voir", (req, res) => controller.voir(req, res));
router.get("/article/:id", (req, res) => controller.detailler(req, res));
router.get("/creer", (req, res) => controller.creer(req, res));
router.post("/enregistrer", (req, res) => controller.enregistrer(req, res));

module.exports = router;
