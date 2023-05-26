const mongoose = require('mongoose');
const config = require('./config');

config.dbURL = "mongodb+srv://adminuser:spacecadet@minicord.li9diyd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect('mongodb+srv://adminuser:spacecadet@minicord.li9diyd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('DB Connection Error: ', err.message));
