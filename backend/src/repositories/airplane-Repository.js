// repositories/airplaneRepository.js
const CrudRepository = require("./crud-Repository");
const { Airplane } = require("../models");

const create = async (payload) => {
  const airplane = await Airplane.create(payload);
  return airplane;
};

const getAll = async (filter = {}, options = {}) => {
  // options can contain pagination, order, include etc.
  const airplanes = await Airplane.findAll({
    where: filter,
    ...options,
  });
  return airplanes;
};

const getById = async (id) => {
  const airplane = await Airplane.findByPk(id);
  return airplane;
};

const update = async (id, payload) => {
  const airplane = await getById(id);
  if (!airplane) return null;
  await airplane.update(payload);
  return airplane;
};

const removeById = async (id) => {
  const airplane = await findById(id);
  if (!airplane) return null;
  await airplane.destroy();
  return true;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  removeById,
};
