/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
const User = require('../models/user');
const { generateToken } = require('./auth');

const getAll = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send({ users });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Error to find users.' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Error to find the user.' });
  }
};

const insert = async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email })) return res.status(400).send({ error: 'User already exist.' });
    const user = await User.create(req.body);
    return res.send({
      user,
      token: generateToken({ id: user._id }),
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Registration failed' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.userId !== id) throw 'User without permission. Token not compatible with user';
    const user = await User.findOneAndUpdate({ _id: id }, req.body);
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Error to update the user.' });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.userId !== id) throw 'User without permission. Token not compatible with user';
    await User.remove({ _id: id });
    return res.status(201).send({ message: 'User removed with success.' });
  } catch (err) {
    console.error(err);
    return res.status(400).send({ error: 'Error to remove the user.' });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove,
};
