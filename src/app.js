const express = require('express');
const login = require('./controllers/login');
const createUser = require('./controllers/createUser');
const getUsers = require('./controllers/getUsers');
const validateJWT = require('./middlewares/validateJWT');
const getUserById = require('./controllers/getUserById');
const addCategory = require('./controllers/addCategory');
const getCategories = require('./controllers/getCategories');
const addPost = require('./controllers/addPost');
const getAllPosts = require('./controllers/getAllPosts');
const getPostById = require('./controllers/getPostById');
const updatePost = require('./controllers/updatePost');

const app = express();

app.use(express.json());

/* apiRoutes.post('/login', routes.login); */

app.post('/login', login);
app.post('/user', createUser);
app.get('/user', validateJWT, getUsers);
app.get('/user/:id', validateJWT, getUserById);
app.post('/categories', validateJWT, addCategory);
app.get('/categories', validateJWT, getCategories);
app.post('/post', validateJWT, addPost);
app.get('/post', validateJWT, getAllPosts);
app.get('/post/:id', validateJWT, getPostById);
app.put('/post/:id', validateJWT, updatePost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
