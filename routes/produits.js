const express = require("express");
const router = express.Router();

/**
 * Routing for Produits
 */
const ProduitsController = require("../controllers/ProduitsController");
const controller = new ProduitsController();

router.get("/list", (req, res) => controller.list(req, res));
router.get("/read/:id", (req, res) => controller.read(req, res));

router.get("/create/", (req, res) => controller.create(req, res));
router.get("/update/:id", (req, res) => controller.update(req, res));
router.get("/delete/:id", (req, res) => controller.delete(req, res));

router.post("/save/:id", (req, res) => controller.save(req, res));
router.post("/updating/:id", (req, res) => controller.updating(req, res));

module.exports = router;
