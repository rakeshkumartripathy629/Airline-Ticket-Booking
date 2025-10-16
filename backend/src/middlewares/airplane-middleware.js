const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "something went wrong";
    ErrorResponse.error = { explanation: "model Number not found" };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next(); // continue to next middleware/controller
}

module.exports = validateCreateRequest;
