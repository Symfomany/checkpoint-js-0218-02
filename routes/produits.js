const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ProduitsController = require("../controllers/ProduitsController");
const controller = new ProduitsController();

router.get("/liste", (req, res) => controller.liste(req, res));

module.exports = router;
