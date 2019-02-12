const {
  getAll,
  getById,
  insert,
  update,
  remove,
} = require('../controllers/users');

module.exports = (app) => {
  app.route('/users')
    .get(getAll)
    .post(insert);

  app.route('/users/:id')
    .get(getById)
    .put(update)
    .delete(remove);
};
