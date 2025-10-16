const airplaneRepository = require("../repositories/airplane-Repository");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

class AirplaneService {
  // ✈️ Create a new airplane
  async createAirplane(data) {
    try {
      const airplane = await airplaneRepository.create(data);
      return {
        data: airplane,
        message: "Airplane created successfully",
      };
    } catch (error) {
      throw new AppError(
        `Failed to create airplane: ${error.message}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // 📋 Get all airplanes
  async getAllAirplanes() {
    try {
      const airplanes = await airplaneRepository.getAll();
      return {
        data: airplanes,
        message: "Airplanes fetched successfully",
      };
    } catch (error) {
      throw new AppError(
        `Failed to fetch airplanes: ${error.message}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // 🔍 Get airplane by ID
  async getAirplaneById(id) {
    try {
      const airplane = await airplaneRepository.getById(id);
      if (!airplane) {
        throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
      }

      return {
        data: airplane,
        message: "Airplane fetched successfully",
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError(
        `Failed to fetch airplane: ${error.message}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // ✏️ Update airplane by ID
  async updateAirplane(id, data) {
    try {
      const updatedAirplane = await airplaneRepository.update(id, data);
      if (!updatedAirplane) {
        throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
      }

      return {
        data: updatedAirplane,
        message: "Airplane updated successfully",
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError(
        `Failed to update airplane: ${error.message}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // ❌ Delete airplane by ID
  async deleteAirplane(id) {
    try {
      const deleted = await airplaneRepository.delete(id);
      if (!deleted) {
        throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
      }

      return {
        data: null,
        message: "Airplane deleted successfully",
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError(
        `Failed to delete airplane: ${error.message}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = new AirplaneService();
