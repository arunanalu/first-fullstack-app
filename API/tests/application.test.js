const {MongoClient} = require('mongodb');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {expect} = chai;
const sinon = require('sinon');
const {getConnection} = require('./connectionMock');
const statesModelsMongo = require('../models/MONGO/states-models-mongo');
const statesServices = require('../services/states-services');
const server = require('../index');


describe('Testes da aplicação', () => {
  let connection;
  let db;

  before(async () => {
    connection = await getConnection();
    db = await connection.db('brasil');
    sinon.stub(MongoClient, 'connect').resolves(connection);
  });

  after(async () => {
    await MongoClient.connect.restore();
  });

  beforeEach(async () => {
    await db.collection('estados').deleteMany({});
  });


  describe('Testes da camada models', () => {
    it('testa a criação de um novo estado', async () => {
      const states = db.collection('estados');
      const stateName = 'Minas Gerais';
      await statesModelsMongo.create(stateName);
      const state = await states.findOne({name: stateName});
      expect(state.name).to.be.equal(stateName);
    });
  });

  describe('Testes da camada service', () => {
    it('testa que não é possível criar estados repetidos', async () => {
      const states = db.collection('estados');
      const stateName = 'Bahia';
      await states.insertOne({name: stateName});
      try {
        await statesServices.createState(stateName);
      } catch (error) {
        // console.log(error);
        expect(error).to.be.an('object');
        expect(error).to.have.property('message');
        expect(error.message).to.equal('O nome já existe');
      }
    });

    describe('Testa a rota /estados', () => {
      it('testa que se obtem a lista de estados como resposta', async () => {
        const states = db.collection('estados');
        const mockStates = [
          {_id: 1234, name: 'Rio de Janeiro'}, {_id: 5678, name: 'Amazonas'},
          {_id: 9101112, name: 'Minas Gerais'},
        ];
        await states.insertMany(mockStates);
        const response = await chai.request(server)
            .get('/estados');
        // console.log(response.body);
        expect(response.body).to.be.an('array');
        expect(response.body).to.length(3);
        expect(response.body).to.deep.equal(mockStates);
      });
    });
  });
});
