const express = require('express');
const UserController = require('./controllers/login');

// ...

const app = express();

app.use(express.json());

app.post('/login', UserController);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
