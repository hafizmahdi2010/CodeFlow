const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/codeFlow")

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;