const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const reflection = require('../routes/api/reflection');

const app = express();
//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('../config/keys').mongoURI;

//connect to mongo
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('err'));

//use Routes
app.use('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
);
// "devDependencies": {
app.use('/api/reflection', reflection);

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
