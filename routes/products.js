const express = require("express");
const router = express.Router();

/**
 * Routing for Products
 */
const ProductsController = require("../controllers/ProductsController");
const controller = new ProductsController();

router.get("/", (req, res) => controller.show(req, res));
router.get("/product/:id", (req, res) => controller.showOne(req, res));
router.get("/create", (req, res) => controller.create(req, res));
router.get("/delete/:id", (req, res) => controller.delete(req, res));
router.get("/actif/:id", (req, res) => controller.actif(req, res));
router.post("/create", (req, res) => controller.createProduct(req, res));


module.exports = router;