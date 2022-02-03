/* eslint-disable new-cap */
const {ObjectId} = require('bson');
const connection = require('./connectionMongo');

const states = async () => {
  const conn = await connection();
  const query = await conn.collection('estados').find({}).toArray();
  return query;
};

const create = async (name) => {
  const conn = await connection();
  const {insertedId} = await conn.collection('estados').insertOne({name});
  return insertedId;
};

const del = async (id) => {
  const conn = await connection();
  await conn.collection('estados').deleteOne({'_id': ObjectId(id)});
};

const verifyName = async (name) => {
  const conn = await connection();
  const query = await conn.collection('estados').findOne({name: name});
  return query;
};

module.exports = {states, create, del, verifyName};
