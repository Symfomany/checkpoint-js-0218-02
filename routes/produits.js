const express = require("express");
const router = express.Router();

/**
 * Routing for Produits
 */
const ProduitsController = require("../controllers/ProduitsController");
const controller = new ProduitsController();

router.get("/list", (req, res) => controller.list(req, res));

module.exports = router;
