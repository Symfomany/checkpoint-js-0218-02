const express = require("express");
const router = express.Router();

/**
 * Routing for Catalogues
 */
const CataloguesController = require("../controllers/CataloguesController");
const controller = new CataloguesController();

router.get("/voir", (req, res) => controller.voir(req, res));


module.exports = router;
