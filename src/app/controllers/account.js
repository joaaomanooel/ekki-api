/* eslint-disable no-console */
const Account = require('../models/account');
const User = require('../models/user');
// const PermissionErr = 'User without permission. Token not compatible with user';

function operationError(operation) {
  if (!operation) return 'Error to do operation';
  return `Error to ${operation} account.`;
}

const getAll = async (req, res) => {
  try {
    const accounts = await Account
      .find({})
      .populate('user', 'name email _id');

    return res.status(200).send({ accounts });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: operationError('find') });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Account
      .findOne({ _id: id })
      .populate('user', 'name email _id');

    return res.status(200).json({ account });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: operationError('find') });
  }
};

const insert = async (req, res) => {
  try {
    const { body } = req;
    body.user = req.userId;
    const account = await Account.create(body);
    await User.findOneAndUpdate({ _id: req.userId }, {
      $set: {
        account: account._id,
      },
    });

    return res.send({ account });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: operationError('register') });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    await Account.findOneAndUpdate({ _id: id }, req.body);
    return res.status(200).send({ message: 'Account updated with soccess.' });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: operationError('update') });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Account.remove({ _id: id });
    return res.status(201).send({ message: 'Account removed with success.' });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: operationError('remove') });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove,
};
