const mongoose = require('mongoose');

mongoose.connect(
  process.argv[2] === 'pord'
    ? process.env.PROD_DB_URL
    : process.env.DEV_DB_URL,
  { useNewUrlParser: true },
);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = mongoose;
