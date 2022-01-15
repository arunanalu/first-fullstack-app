/*
SQL database it's just here as an example.
You can opt for sql by modifying the commented line below.
Tests will only work using mongo
*/

// const statesModels = require('../models/SQL/states-models-sql');
const statesModels = require('../models/MONGO/states-models-mongo');

const Joi = require('joi');
const {badRequest} = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const nameSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const idSchema = Joi.object({
  id: Joi.string().alphanum().required(),
});

const getStates = async () => {
  const estados = await statesModels.states();
  return estados;
};

const createState = async (name) => {
  // if (!name || name === '' || name.length < 3) {
  //   throw errorConstructor(badRequest, 'erro', 'O nome está errado');
  // }
  const {error} = nameSchema.validate({name});
  if (error) {
    throw errorConstructor(badRequest, error.message, 'O nome está errado');
  }
  const verify = await statesModels.verifyName(name);
  if (verify) {
    throw errorConstructor(badRequest, 'O nome já existe', 'erro');
  }
  const id = await statesModels.create(name);
  return id;
};

const delState = async (id) => {
  const {error} = idSchema.validate({id});
  if (error) {
    throw errorConstructor(badRequest, error.message, 'O id está errado');
  }
  await statesModels.del(id);
};

module.exports = {getStates, createState, delState};
