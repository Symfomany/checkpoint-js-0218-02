const express = require("express");
const router = express.Router();

/**
 * Routing for Products
 */
const ProductsController = require("../controllers/ProductsController");
const controller = new ProductsController();

router.get("/", (req, res) => controller.show(req, res));



module.exports = router;