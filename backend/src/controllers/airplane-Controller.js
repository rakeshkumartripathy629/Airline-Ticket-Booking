const { StatusCodes } = require("http-status-codes");
const { airplaneService } = require("../servises");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

class AirplaneController {
  async createAirplane(req, res) {
    try {
      const result = await airplaneService.createAirplane(req.body);
      return res.status(StatusCodes.CREATED).json({
        success: true,
        statusCode: StatusCodes.CREATED,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message || "Something went wrong",
        data: {},
      });
    }
  }

  async getAllAirplanes(req, res) {
    try {
      const result = await airplaneService.getAllAirplanes();
      return res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message || "Something went wrong",
        data: {},
      });
    }
  }

  async getAirplaneById(req, res) {
    try {
      const result = await airplaneService.getAirplaneById(req.params.id);
      return res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message,
        data: {},
      });
    }
  }

  async updateAirplane(req, res) {
    try {
      const result = await airplaneService.updateAirplane(req.params.id, req.body);
      return res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message,
        data: {},
      });
    }
  }

  async deleteAirplane(req, res) {
    try {
      const result = await airplaneService.deleteAirplane(req.params.id);
      return res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message,
        data: {},
      });
    }
  }
}

module.exports = new AirplaneController();
