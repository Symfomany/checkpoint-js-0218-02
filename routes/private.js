const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const PagesController = require("../controllers/PagesController");
const controller = new PagesController();