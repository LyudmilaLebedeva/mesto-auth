const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const card = require('./routes/card');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());

app.use('/cards', (req, res, next) => {
  req.user = {
    _id: '5f868bd441cd0130efc5bfa7',
  };

  next();
});

app.use('/cards', card);
app.use('/users', user);

app.all(/[^(users)(cards)]/, (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
