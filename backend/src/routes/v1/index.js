const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers/");

const airplaneRoutes=require('./airplane.Routes')
const cityRoutes = require('./city.Routes')

router.get("/info", infoController.getInfo);

router.use("/airplanes", airplaneRoutes);
router.use("/city",cityRoutes)
module.exports = router;

