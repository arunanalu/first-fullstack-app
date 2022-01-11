// const statesModels = require('../models/SQL/states-models-sql');
const statesModels = require('../models/MONGO/states-models-mongo');

const getStates = async () => {
  const estados = await statesModels.states();
  return estados;
};

const createState = async (name) => {
  const id = await statesModels.create(name);
  return id;
};

const delState = async (id) => {
  await statesModels.del(id);
};

module.exports = {getStates, createState, delState};
