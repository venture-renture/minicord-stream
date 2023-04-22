const mongoose = require('mongoose');
const config = require('./config');

config.dbURL = "mongodb+srv://admin:spacecadet@cluster0.kqtpmcc.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect('mongodb+srv://admin:spacecadet@cluster0.kqtpmcc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('DB Connection Error: ', err.message));
