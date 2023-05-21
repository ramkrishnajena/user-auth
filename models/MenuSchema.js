const mongoose = require("mongoose");

const Categories = new mongoose.Schema({
  main: String,
  subCategories: [
    {
      name: String,
      link: String,
    },
  ],
});
module.exports = mongoose.model("Categories", Categories);
