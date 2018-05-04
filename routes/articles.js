const express = require("express");
const router = express.Router();
/**
 * Routing for Articles
 */
const ArticlesController = require("../controllers/ArticlesController");
const controller = new ArticlesController();

router.get("/liste", (req, res) => controller.liste(req, res));
router.get("/voir/:id", (req, res) => controller.voir(req, res));

router.get("/ajouter/:id", (req, res) => controller.ajouter(req, res));
router.post("/enr", (req, res) => controller.enr(req, res));

router.get("/supp/:id", (req, res) => controller.supp(req, res));

module.exports = router;
