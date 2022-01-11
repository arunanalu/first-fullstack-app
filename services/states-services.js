// const statesModels = require('../models/SQL/states-models-sql');
const statesModels = require('../models/MONGO/states-models-mongo');
const {badRequest} = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const getStates = async () => {
  const estados = await statesModels.states();
  return estados;
};

const createState = async (name) => {
  if (!name || name === '' || name.length < 3) {
    throw errorConstructor(badRequest, 'erro', 'O nome está errado');
  }
  const id = await statesModels.create(name);
  return id;
};

const delState = async (id) => {
  await statesModels.del(id);
};

module.exports = {getStates, createState, delState};
