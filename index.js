/* eslint-disable no-console */
require('dotenv').config();
const chalk = require('chalk');
const app = require('./src');

const PORT = (process.argv[2] === 'prod'
  ? process.env.PROD_PORT
  : process.env.DEV_PORT) || 5000;

const URL = process.argv[2] === 'prod'
  ? 'ekkibank.herokuapp.com'
  : `localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server: ${chalk.hex('#B50F76').bold('on')}`);
  console.log(`PORT: ${chalk.hex('#FFA039').bold(PORT)}`);
  console.log(`URL: ${chalk.hex('#660AAB').bold(URL)}`);
});
