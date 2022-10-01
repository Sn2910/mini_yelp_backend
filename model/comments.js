const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: String,
  text: String,
  created: ,
  time: ,
});

module.exports = mongoose.model("Comment", studentSchema);