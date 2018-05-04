const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/ProductsController");
const controller = new ProductsController();

// Main Routes
router.get("/", (req, res) => controller.listing(req, res));
router.get("/:id(\\d+)", (req, res) => controller.read(req, res));
router.get("/create", (req, res) => controller.create(req, res));
router.get("/update/:id(\\d+)", (req, res) => controller.update(req, res));

// Event routes
router.get("/delete/:id(\\d+)", (req, res) => controller.delete(req, res));
router.get("/toggle-active/:id(\\d+)", (req, res) =>
  controller.toggleActive(req, res)
);
router.get("/quantity-plus/:id(\\d+)", (req, res) =>
  controller.quantityAdd(req, res)
);
router.get("/quantity-minus/:id(\\d+)", (req, res) =>
  controller.quantityRemove(req, res)
);

// Post routes
router.post("/creating", (req, res) => controller.creating(req, res));

module.exports = router;
