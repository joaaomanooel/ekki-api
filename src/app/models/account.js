const mongoose = require('mongoose');

const { Schema } = mongoose;
const max = [99999999, 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];

const AccountSchema = new Schema({
  bank: {
    type: Number,
    required: true,
    default: 852,
  },
  agency: {
    type: Number,
    required: true,
    default: 1,
  },
  account: {
    type: Number,
    required: true,
    unique: true,
    max,
  },
  balence: {
    type: Schema.Types.Decimal128,
    default: 0.0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Account', AccountSchema);
