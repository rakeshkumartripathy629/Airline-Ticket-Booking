// routes/cityRoutes.js
const express = require("express");
const router = express.Router();
const cityController = require("../../controllers/city-controller");
const validateCreateRequest = require("../../middlewares/city-middleware"); 

// Create a new city
router.post("/create", validateCreateRequest, (req, res) =>
  cityController.createCity(req, res)
);

// Get all cities
router.get("/", (req, res) => cityController.getAllCities(req, res));

// Get a single city by ID
router.get("/:id", (req, res) => cityController.getCityById(req, res));

// Update city by ID
router.put("/:id", (req, res) => cityController.updateCity(req, res));

// Delete city by ID
router.delete("/:id", (req, res) => cityController.deleteCity(req, res));

module.exports = router;
