// repositories/crudRepository.js

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // Create new record
  async create(data) {
    const result = await this.model.create(data);
    return result;
  }

  // Get all records
  async getAll(where = {}) {
    const results = await this.model.findAll({ where });
    return results;
  }

  // Get record by ID
  async getById(id) {
    const result = await this.model.findByPk(id);
    return result;
  }

  // Update record by ID
  async update(id, data) {
    const record = await this.getById(id);
    if (!record) return null;
    await record.update(data);
    return record;
  }

  // Delete record by ID
  async delete(id) {
    const record = await this.getById(id);
    if (!record) return null;
    await record.destroy();
    return true;
  }
}

module.exports = CrudRepository;
