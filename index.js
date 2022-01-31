const express = require('express');
const statesControllers = require('./controllers/states-controllers');
const error = require('./middlewares/errorMiddleware');
const app = express();
// const PORT = 3000;

require('dotenv').config();

const {PORT} = process.env;

app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'));

app.get('/estados', statesControllers.getAllStates);

app.post('/estados', statesControllers.createNewState);

app.delete('/estados/:id', statesControllers.delNewState);

app.use(error);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = app;
