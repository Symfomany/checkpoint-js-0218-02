const express = require("express");
const router = express.Router();

const CatalogueController = require("../controllers/CatalogueController");
const controller = new CatalogueController();

router.get("/liste", (req, res) => controller.liste(req, res));

module.exports = router;
