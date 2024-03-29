const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Please add an email'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
