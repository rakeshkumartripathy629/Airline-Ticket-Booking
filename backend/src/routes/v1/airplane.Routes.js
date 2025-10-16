const express = require("express");
const router = express.Router();
const airplaneController = require("../../controllers/airplane-Controller");
const { validateCreateRequest } = require("../../middlewares");

// Create a new airplane with validation
router.post("/create", validateCreateRequest, (req, res) =>
  airplaneController.createAirplane(req, res)
);

// Get all airplanes
router.get("/", (req, res) => airplaneController.getAllAirplanes(req, res));

// Get a single airplane by ID
router.get("/:id", (req, res) => airplaneController.getAirplaneById(req, res));

// Update airplane by ID
// You can reuse the same validation middleware or create a separate one for updates
router.put("/:id", validateCreateRequest, (req, res) =>
  airplaneController.updateAirplane(req, res)
);

// Delete airplane by ID
router.delete("/:id", (req, res) => airplaneController.deleteAirplane(req, res));

module.exports = router;
