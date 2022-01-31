// const mongodb = require('mongodb').MongoClient;

// const MONGO_DB_URL = 'mongodb://localhost:27017/brasil';
// const DB_NAME = 'brasil';

// module.exports = () => mongodb.connect(MONGO_DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//     .then((connection) => connection.db(DB_NAME))
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     });

require('dotenv').config();
const {MongoClient} = require('mongodb');

const {MONGODB_URI} = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  return db ?
    Promise.resolve(db) :
    MongoClient.connect(MONGODB_URI, OPTIONS)
        .then((conn) => {
          db = conn.db('brasil');
          return db;
        });
};

module.exports = connection;
