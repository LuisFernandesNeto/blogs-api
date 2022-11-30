const express = require('express');
const login = require('./controllers/login');
const createUser = require('./controllers/createUser');

const app = express();

app.use(express.json());

/* apiRoutes.post('/login', routes.login); */

app.post('/login', login);
app.post('/user', createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
