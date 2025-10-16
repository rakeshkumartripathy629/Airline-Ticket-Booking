const { StatusCodes } = require("http-status-codes");
const cityService = require("../servises/city-Service");

class CityController {
  // Create a new city
  async createCity(req, res) {
    try {
      const result = await cityService.createCity(req.body);
      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  }

  // Get all cities
  async getAllCities(req, res) {
    try {
      const result = await cityService.getAllCities();
      return res.status(StatusCodes.OK).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  }

  // Get city by ID
  async getCityById(req, res) {
    try {
      const result = await cityService.getCityById(req.params.id);
      return res.status(StatusCodes.OK).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || StatusCodes.NOT_FOUND).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  }

  // Update city by ID
  async updateCity(req, res) {
    try {
      const result = await cityService.updateCity(req.params.id, req.body);
      return res.status(StatusCodes.OK).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || StatusCodes.NOT_FOUND).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  }

  // Delete city by ID
  async deleteCity(req, res) {
    try {
      const result = await cityService.deleteCity(req.params.id);
      return res.status(StatusCodes.OK).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      return res.status(error.statusCode || StatusCodes.NOT_FOUND).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  }
}

module.exports = new CityController();
