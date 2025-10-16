const CrudRepository = require("./crud-Repository");
const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City); // pass the City model to generic CRUD
  }

  // Custom method example: find cities by country
  async findByCountry(country) {
    return await City.findAll({ where: { country } });
  }
}

module.exports = new CityRepository();
