const express = require('express');
const statesControllers = require('./controllers/states-controllers');
const error = require('./middlewares/errorMiddleware');
const cors = require('cors');
const app = express();

require('dotenv').config();

const {PORT} = process.env;

app.use(express.json());

app.use(cors());

app.get('/', (_req, res) => res.send('Hello ! The app is working properly !'));

app.get('/estados', statesControllers.getAllStates);

app.post('/estados', statesControllers.createNewState);

app.delete('/estados/:id', statesControllers.delNewState);

app.use(error);

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));

module.exports = app;
