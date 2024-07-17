const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/codeFlow", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fileSchema = new mongoose.Schema({
  name: String,
  isIn: String,
  content: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const folderSchema = new mongoose.Schema({
  name: String,
  isIn: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const userProjectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  template: {
    type: String,
    required: true
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  files: [fileSchema],
  folders: [folderSchema]
});

const projectModel = mongoose.model('UserProjects', userProjectsSchema);

module.exports = projectModel;
