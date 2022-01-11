const statesServices = require('../services/states-services');

const getAllStates = async (_req, res, next) => {
  try {
    const result = await statesServices.getStates();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const createNewState = async (req, res, next) => {
  const {name} = req.body;

  try {
    const id = await statesServices.createState(name);

    const result = {
      id,
      name,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const delNewState = async (req, res, next) => {
  const {id} = req.params;
  try {
    await statesServices.delState(id);
    res.status(200).json({message: 'estado deletado com sucesso'});
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {getAllStates, createNewState, delNewState};
