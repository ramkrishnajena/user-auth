const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  courseName: String,
  courseImg: String,
  price: Number,
  rating: Number,
  instructorId: Number,
  description: String,
  sections: [],
  category: Number,
  tags: [],
});
module.exports = mongoose.model("Courses", Course);
