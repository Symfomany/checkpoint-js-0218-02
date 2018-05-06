const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const productsController = require("../controllers/productsController");
const controller = new productsController();

router.get("/liste", (req, res) => controller.showProducts(req, res));
router.get("/voir/:id", (req, res) => controller.detail(req, res));
router.get("/creation", (req, res) => controller.create(req, res));
router.post("/creation", (req, res) => controller.createProduct(req, res));
router.get("/suppress/:id", (req, res) => controller.suppress(req, res));

module.exports = router;
