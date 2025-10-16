const cityRepository = require("../repositories/city-Repository");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { Sequelize } = require("sequelize"); // for error checking

class CityService {
  async createCity(data) {
    try {
      const city = await cityRepository.create(data);
      return {
        data: city,
        message: "City created successfully",
      };
    } catch (error) {
      // Handle Sequelize validation errors
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new AppError(
          `City already exists: ${error.errors[0].message}`,
          StatusCodes.BAD_REQUEST
        );
      } else if (error.name === "SequelizeValidationError") {
        throw new AppError(
          `Validation failed: ${error.errors[0].message}`,
          StatusCodes.BAD_REQUEST
        );
      }

      throw new AppError(`Failed to create city: ${error.message}`);
    }
  }

  async getAllCities() {
    try {
      const cities = await cityRepository.getAll();
      return {
        data: cities,
        message: "Cities fetched successfully",
      };
    } catch (error) {
      throw new AppError(`Failed to fetch cities: ${error.message}`);
    }
  }

  async getCityById(id) {
    try {
      const city = await cityRepository.getById(id);
      if (!city) throw new AppError("City not found", StatusCodes.NOT_FOUND);
      return {
        data: city,
        message: "City fetched successfully",
      };
    } catch (error) {
      throw new AppError(`Failed to fetch city: ${error.message}`);
    }
  }

  async updateCity(id, data) {
    try {
      const updatedCity = await cityRepository.update(id, data);
      if (!updatedCity)
        throw new AppError("City not found", StatusCodes.NOT_FOUND);
      return {
        data: updatedCity,
        message: "City updated successfully",
      };
    } catch (error) {
      // Handle Sequelize validation errors during update
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new AppError(
          `City already exists: ${error.errors[0].message}`,
          StatusCodes.BAD_REQUEST
        );
      } else if (error.name === "SequelizeValidationError") {
        throw new AppError(
          `Validation failed: ${error.errors[0].message}`,
          StatusCodes.BAD_REQUEST
        );
      }

      throw new AppError(`Failed to update city: ${error.message}`);
    }
  }

  async deleteCity(id) {
    try {
      const deleted = await cityRepository.delete(id);
      if (!deleted) throw new AppError("City not found", StatusCodes.NOT_FOUND);
      return {
        data: null,
        message: "City deleted successfully",
      };
    } catch (error) {
      throw new AppError(`Failed to delete city: ${error.message}`);
    }
  }
}

module.exports = new CityService();
