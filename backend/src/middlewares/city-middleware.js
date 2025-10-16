const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCityCreateRequest(req, res, next) {
  if (!req.body.name) {
    // Customize the error message
    ErrorResponse.message = "City creation failed";
    ErrorResponse.error = { explanation: "City name not found" };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next(); // Continue to controller if valid
}

module.exports = validateCityCreateRequest;
