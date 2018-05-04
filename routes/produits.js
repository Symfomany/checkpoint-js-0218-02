const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ProduitsController = require("../controllers/ProduitsController");
const controller = new ProduitsController();

router.get("/", (req, res) => controller.liste(req, res));
router.get("/details:id(\\d+)", (req, res) => controller.details(req, res));

module.exports = router;
