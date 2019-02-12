const pkg = require('../../package.json');
require('dotenv').config();

module.exports = {
  swagger: '2.0',
  info: {
    version: pkg.version,
    title: 'Ekki Bank API',
    description: pkg.description,
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: process.argv[2] === 'prod' ? process.env.PROD_URL : process.env.DEV_URL,
  basePath: '/',
};
