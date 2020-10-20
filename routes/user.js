const user = require('express').Router();
const { createUser, getUsers, getUser } = require('../controllers/users');

user.post('/', createUser);
user.get('/', getUsers);
user.get('/:userId', getUser);

module.exports = user;
