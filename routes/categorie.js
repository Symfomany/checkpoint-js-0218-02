const express = require("express");
const router = express.Router();

const CategoriesController = require("../controllers/CategoriesController");
const controller = new CategoriesController();

router.get("/liste", (req, res) => controller.liste(req, res));

module.exports = router;
