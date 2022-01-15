const express = require('express');
const statesControllers = require('./controllers/states-controllers');
const error = require('./middlewares/errorMiddleware');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'));

app.get('/estados', statesControllers.getAllStates);

app.post('/estados', statesControllers.createNewState);

app.delete('/estados/:id', statesControllers.delNewState);

app.use(error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
