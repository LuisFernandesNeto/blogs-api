const express = require('express');
const login = require('./controllers/login');
const createUser = require('./controllers/createUser');
const getUsers = require('./controllers/getUsers');
const validateJWT = require('./middlewares/validateJWT');

const app = express();

app.use(express.json());

/* apiRoutes.post('/login', routes.login); */

app.post('/login', login);
app.post('/user', createUser);
app.get('/user', validateJWT, getUsers);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
